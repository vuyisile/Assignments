var opponent;
var player;
var game = {
    currentBoard: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    winningX: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]]
}

var currentBoard = [[0, 1, 2], [3, 4, 5],[6, 7, 8]];

function isO(){
    return true;
}
function isX(){
    if(isO() !== true)return true;
}
function chooseIcon(){
    if(isX() === true){
        player = 'X';
        opponent = 'O';
    }else if(isO() === true){
        player = 'O';
        opponent = 'X';
    }
}


function getVal(index){
    console.log(generateNewBoard(getVal, currentBoard));
    return index;
}

var newBoard = [];
function generateNewBoard(m, board) {
    for (var i in board) {
        var arr = board[i];
        newBoard.push(arr.filter((val) => val !== m));

    }
    return newBoard;
}

//console.log(generateNewBoard(0, currentBoard));

// console.log(generateNewBoard(5, currentBoard));