function createBoard(){
    var board = []
    for(var x  = 0; x < 100;x++){
        for(var y  = 0; y < 100;y++){
            board.push({'x':x ,'y':y, isType: 'WALL', occupiedBy:'NONE'})
        }
    }
    return board
}