function createBoard() {
    var board = []
    for (var x = -10; x <= 10; x++) {
        for (var y = -10; y <= 10; y++) {
            board.push({ 'x': y, 'y': x, isType: 'WALL', occupiedBy: 'NONE', life: 0, impact: 0, weapon: null })
        }
    }
    return board
}

function placeWeapon(path, weapon) {
    for (var i = 0; i < 1; i++) {
        var index = Math.floor(Math.random() * (path.length))
        if (path[index].occupiedBy === 'NONE') {
            path[index].occupiedBy = 'WEAPON';
            path[index].weapon = weapon
        }
    }
    return path
}


function placeEnemy(path) {
    for (var i = 0; i < 15; i++) {
        var index = Math.floor(Math.random() * (path.length))
        if (path[index].occupiedBy === 'NONE') {
            path[index].occupiedBy = 'ENEMY';
            path[index].life = 100
            path[index].impact = 25
        }
    }
    return path
}

function placeLifePill(path) {
    for (var i = 0; i < 15; i++) {
        var index = Math.floor(Math.random() * (path.length))
        if (path[index].occupiedBy === 'NONE') {
            path[index].occupiedBy = 'LIFE-PILL'
        }
    }
    return path
}

function resetDungeon(path) {
    for (var i = 0; i < path.length; i++) {
        path[i] = { 'x': path[i].y, 'y': path[i].x, isType: 'PATH', occupiedBy: 'NONE', life: 0, impact: 0, weapon: null }
    }
    return path
}
function placeDoor(path) {
    var index = Math.floor(Math.random() * (path.length))
    if (path[index].occupiedBy === 'NONE') {
        path[index].occupiedBy = 'DOOR';
    }
    return path
}
function placePlayer(path) {
    var index = Math.floor(Math.random() * (path.length))
    if (path[index].occupiedBy === 'NONE') {
        path[index].occupiedBy = 'PLAYER';
        path[index].life = 100
        path[index].impact = 25
        path[index].xp = 0;
        path[index].weapon = 'stick';
    }
    return path
}

function placeAll(dungeon, weapon) {
    var path = dungeon;
    var one = placeEnemy(path);
    var two = placeLifePill(one);
    var three = placeWeapon(two, weapon);
    var four = placePlayer(three);
    var five = placeDoor(four);
    return five
}



module.exports = { createBoard, placeEnemy, placeLifePill, placePlayer, placeAll, resetDungeon }
