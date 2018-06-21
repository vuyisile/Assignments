function createBoard() {
    var board = []
    for (var x = -10; x <= 10; x++) {
        for (var y = -10; y <= 10; y++) {
            board.push({ 'x': y, 'y': x, isType: 'WALL', occupiedBy: 'NONE', life: 0, impact:0})
        }
    }
    return board
}


function placeEnemy(path) {
    for (var i = 0; i < 15; i++) {
        if (path[i].occupiedBy === 'NONE') {
            var index = Math.floor(Math.random() * (path.length))
            path[index].occupiedBy = 'ENEMY';
            path[index].life = 100
            path[index].impact = 23
        }
    }
    return path
}

function placeLifePill(path) {
    for (var i = 0; i < 15; i++) {
        if (path[i].occupiedBy === 'NONE') {
            var index = Math.floor(Math.random() * (path.length))
            path[index].occupiedBy = 'LIFE-PILL'
        }
    }
    return path
}
function placePlayer(path) {
   
        if (path[221].occupiedBy === 'NONE') {
            var index = 221;
            path[index].occupiedBy = 'PLAYER';
            path[index].life = 100
            path[index].impact = 25
            path[index].xp = 0;
        }

    return path
}





module.exports = { createBoard, placeEnemy, placeLifePill, placePlayer }
