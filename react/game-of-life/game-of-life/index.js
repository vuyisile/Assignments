

function createGrid() {
    var grid = [];
    for (var x = 0; x <= 10; x++) {
        for (var y = 0; y <= 10; y++) {
            grid.push({ 'x': x, 'y': y, isAlive: false })
        }
    }
    return grid;
}

function setGeneration() {
    var grid = createGrid();
    var aliveCells = [{ 'x': 0, 'y': 1, isAlive: true }, { 'x': 0, 'y': 2, isAlive: true }, { 'x': 0, 'y': 3, isAlive: true }]
    for (var i = 0; i < grid.length; i++){
        for(var cell of aliveCells){
            if(grid[i].x === cell.x && grid[i].y === cell.y){
                grid[i] = cell; 
            }
        }
    }
    return grid
}

function getNeighbours() {
    var grid = setGeneration();
    var interections = [];
    grid.forEach(function (point) {

        var p1 = { 'x': point.x, 'y': point.y + 1, isAlive: point.isAlive };
        var p2 = { 'x': point.x, 'y': point.y - 1, isAlive: point.isAlive };
        var p7 = { 'x': point.x + 1, 'y': point.y, isAlive: point.isAlive };
        var p8 = { 'x': point.x - 1, 'y': point.y, isAlive: point.isAlive };
        var p3 = { 'x': point.x - 1, 'y': point.y + 1, isAlive: point.isAlive };
        var p4 = { 'x': point.x + 1, 'y': point.y + 1, isAlive: point.isAlive };
        var p5 = { 'x': point.x - 1, 'y': point.y - 1, isAlive: point.isAlive };
        var p6 = { 'x': point.x + 1, 'y': point.y - 1, isAlive: point.isAlive };

        var ni = [p1, p2, p3, p4, p5, p6, p7, p8]

        interections.push({ cell: { 'x': point.x, 'y': point.y, isAlive: point.isAlive }, neighbors: ni });

    })
    return interections;
}



function createNewGeneration(){

}

getNeighbours();

console.log(getNeighbours());