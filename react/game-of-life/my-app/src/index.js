import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class GameOfLife extends React.Component {
    constructor() {
        super()
        this.state = { gameOfLife: [], aliveCells: [] }
    }

    createGrid() {
        var grid = []
        for (var x = 0; x <= 20; x++) {
            for (var y = 0; y <= 20; y++) {
                grid.push({ 'x': x, 'y': y, isAlive: false })
            }
        }
        this.setState({ gameOfLife: grid });
    }
    setInitialGeneration(aliveCells) {
        var grid = createGrid();
        for (var i = 0; i < grid.length; i++) {
            for (var cell of aliveCells) {
                if (grid[i].x === cell.x && grid[i].y === cell.y) {
                    grid[i] = cell;
                }
            }
        }
        this.setState({ gameOfLife: grid });
    }

    seed(seed) {
        var grid = this.state.aliveCells;
        grid.push({ x: seed.x, y: seed.y, isAlive: true });
        this.setState({ aliveCells: grid });
        console.log('aliveCells', this.state.aliveCells)
    }

    startGame() {
        setInterval(function () {
            var alive = this.state.aliveCells;
            this.setInitialGeneration(alive);
        }, 1000)
    }


getNeighbours(board) {
        var interections = [];
        var aliveNeighbours = [];
        for (var i = 0; i < grid.length; i++) {
    
            var p1 = board.find((cell) => cell.x === board[i].x && cell.y === board[i].y + 1)
            var p2 = board.find((cell) => cell.x === board[i].x && cell.y === board[i].y - 1);
            var p3 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y);
            var p4 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y);
            var p7 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y + 1);
            var p8 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y + 1);
            var p5 = board.find((cell) => cell.x === board[i].x - 1 && cell.y === board[i].y - 1);
            var p6 = board.find((cell) => cell.x === board[i].x + 1 && cell.y === board[i].y - 1);
    
            var ni = [p1, p2, p3, p4, p7, p8, p5, p6].filter((cell) => cell !== undefined);
            
            var newNi = ni.filter((cell) => cell.isAlive === true);
    
            interections.push({ cell: { 'x': board[i].x, 'y': board[i].y, isAlive: board[i].isAlive }, neighbours: newNi, len: newNi.length });
    
        }
        return interections;
    }
    
    
    createNewGeneration(board, theGrid) {
        var arr = [];
        for (var i in board) {
            if (board[i].len === 2 && board[i].cell.isAlive === true || board[i].len === 3 && board[i].cell.isAlive === true) {
                theGrid[i].isAlive = true;
             
            }
            else if (board[i].len < 2 && board[i].cell.isAlive === true) {
                theGrid[i].isAlive = false;
                
            }
    
            else if (board[i].len > 3 && board[i].cell.isAlive === true) {
                theGrid[i].isAlive = false;
                
            }
            else if (board[i].len === 3 && board[i].cell.isAlive === false) {
                theGrid[i].isAlive = true;
               
            }
        }
        return theGrid
    }


    componentDidMount() {
        this.createGrid();
    }

    render() {
        return (

            <div>
                <table className={'tbl'}>
                    {this.state.gameOfLife.map((cell) => <button onClick={() => this.seed(cell)}>{cell.x + ';' + cell.y}</button>)}
                </table>
            </div>
        )
    }

}
// ========================================

ReactDOM.render(
    <GameOfLife />,
    document.getElementById('root')
);
