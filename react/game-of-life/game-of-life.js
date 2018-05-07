

function createGrid() {
    var grid = [];
    for (var x = 0; x <= 10; x++) {
        for (var y = 0; y <= 10; y++) {
            grid.push({ 'x': x, 'y': y, isAlive: false })
        }
    }
    return grid;
}

function setInitialGeneration(aliveCells) {
    var grid = createGrid();
    for (var i = 0; i < grid.length; i++) {
        for (var cell of aliveCells) {
            if (grid[i].x === cell.x && grid[i].y === cell.y) {
                grid[i] = cell;
            }
        }
    }
    return grid
}
var interections = [];

function getNeighbours(board) {
    var aliveNeighbours = [];
    for (var i = 0; i < grid.length; i++) {

        var p1 = board.find((cell) => cell.x === board[i].x && cell.y === board[i].y + 1 && cell.isAlive === true);
        var p2 = board.find((cell) => cell.x === board[i].x && cell.y === board[i].y - 1 && cell.isAlive === true);
        var p3 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y && cell.isAlive === true);
        var p4 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y && cell.isAlive === true);
        var p7 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y + 1 && cell.isAlive === true);
        var p8 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y + 1 && cell.isAlive === true);
        var p5 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y - 1 && cell.isAlive === true);
        var p6 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y - 1 && cell.isAlive === true);

        var ni = [p1, p2, p3, p4, p7, p8, p5, p6];
        newNi = ni.filter((cell) => cell !== undefined);

        interections.push({ cell: { 'x': board[i].x, 'y': board[i].y, isAlive: board[i].isAlive }, neighbours: newNi, len: newNi.length });

    }
    return interections;
}


function createNewGeneration(board, theGrid) {
    var arr = [];
    for (var i in board) {
        if (board[i].len === 3 && board[i].cell.isAlive === false) {
            theGrid[i].isAlive = true;
        } else if (board[i].len < 2 && board[i].cell.isAlive === true) {
            theGrid[i].isAlive = false;
        } else if (board[i].len === 2 || board[i].len === 3 && board[i].cell.isAlive === true) {
            theGrid[i].isAlive = true;
        } else if (board[i].len > 3 && board[i].cell.isAlive === true) {
            theGrid[i].isAlive = true;
        }
    }
    return theGrid
}
var initialAliveCells = [{ 'x': 0, 'y': 1, isAlive: true }, { 'x': 0, 'y': 2, isAlive: true }, { 'x': 0, 'y': 3, isAlive: true }];
var grid = setInitialGeneration(initialAliveCells)
var neigbourHood = getNeighbours(grid);
console.log(createNewGeneration(neigbourHood, grid));




module.exports = { setInitialGeneration, getNeighbours, createNewGeneration }  