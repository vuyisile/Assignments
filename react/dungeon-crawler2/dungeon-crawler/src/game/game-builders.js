function createBoard() {
    var board = []
    for (var x = -10; x <= 10; x++) {
        for (var y = -10; y <= 10; y++) {
            board.push({ 'x': y, 'y': x, isType: 'WALL', occupiedBy: 'NONE', life: 0, impact: 0, weapon: null, toggleState: 'ON' })
        }
    }
    return board
}

function placeWeapon(path, weapon) {
    var index = Math.floor(Math.random() * (path.length))
    while (path[index].occupiedBy !== 'NONE') {
        index = Math.floor(Math.random() * (path.length))
    }
    if (path[index].occupiedBy === 'NONE') {
        path[index].occupiedBy = 'WEAPON';
        path[index].weapon = weapon

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
    while (path[index].occupiedBy !== 'NONE') {
        index = Math.floor(Math.random() * (path.length))
    }
    path[index].occupiedBy = 'DOOR';
    return path
}

function placePlayer(path) {
    var index = Math.floor(Math.random() * (path.length))
    while (path[index].occupiedBy !== 'NONE') {
        index = Math.floor(Math.random() * (path.length))
    }
    path[index].occupiedBy = 'PLAYER';
    path[index].life = 100
    path[index].impact = 25
    path[index].xp = 0;
    path[index].weapon = 'stick';
    return path
}

function initiateState(dungeon, weapon) {
    var path = dungeon;
    var one = placeEnemy(path);
    var two = placeLifePill(one);
    var three = placeWeapon(two, weapon);
    var four = placePlayer(three);
    var five = placeDoor(four);
    return five
}

function toggleField(theBoard, player) {
    theBoard.forEach((block) => block.toggleState === "OFF");
    var p1 = theBoard.find((cell) => cell.x === player.x && cell.y === player.y + 1)
    var p2 = theBoard.find((cell) => cell.x === player.x && cell.y === player.y - 1);
    var p3 = theBoard.find((cell) => cell.x === player.x + 1 && cell.y === player.y);
    var p4 = theBoard.find((cell) => cell.x === player.x - 1 && cell.y === player.y);
    var p7 = theBoard.find((cell) => cell.x === player.x - 1 && cell.y === player.y + 1);
    var p8 = theBoard.find((cell) => cell.x === player.x + 1 && cell.y === player.y + 1);
    var p5 = theBoard.find((cell) => cell.x === player.x - 1 && cell.y === player.y - 1);
    var p6 = theBoard.find((cell) => cell.x === player.x + 1 && cell.y === player.y - 1);
    var cells = [p1, p2, p3, p4, p5, p6, p7, p8]

    for (var cell of theBoard) {
        if (cell !== cells[0] && cell !== cells[1] && cell !== cells[2] && cell !== cells[3] && cell !== cells[4] && cell !== cells[5] && cell !== cells[6] && cell !== cells[7]) {
            cell.toggleState = "OFF"
        }
        else {
            cell.toggleState = "ON"
        }
        player.toggleState = "ON";

    }

    return { board: theBoard, playerPosition: player }
}


module.exports = { toggleField, createBoard, placeEnemy, placeLifePill, placePlayer, initiateState, placeDoor, placeDoor }
