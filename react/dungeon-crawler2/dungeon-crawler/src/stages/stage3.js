import React, { Component } from 'react';
import '../index.css';
import { createBoard, initiateState } from '../game/game-builders'
import { pathThree } from '../game/dungeon-three'

class Stage3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: createBoard(),
            path: [],
            playerPosition: null,
            XP: 0,
            LEVEL: 0,
            ENEMY_HEALTH: 100,
            PLAYER_HEALTH: 100,
            dungeon: 1,
            weapon: 'stick',
            allPaths: pathThree ,
            indexOfPath: 0,
            toggleState: false
        }
        // this.runKey = this.props.runKey
    }

    componentDidMount() {
        var currentBoard = this.state.board;
        var path = initiateState(pathThree  , 'devil-fork');
        this.setState({ path })
        
        for (var i in currentBoard) {
            for (var j in path) {
                if (currentBoard[i].x === path[j].x && currentBoard[i].y === path[j].y) {
                    currentBoard[i] = path[j];
                    continue
                }
            }
        }
        if (this.state.playerPosition === null) {
            var playerPos = currentBoard.find((cell) => cell.occupiedBy === 'PLAYER');
            this.setState({ playerPosition: playerPos });
          }
          this.setState({ board: currentBoard, path: path })
          this.props.updateBoard(currentBoard,path)
        document.onkeydown = this.props.runKey;
    }


    returnNonWalls(path) {
        var room = this.state.path;
        path.isType = 'PATH';
        room.push(path);
        this.setState({ path: room })
      }


    //   movePlayer(event,pos){
    //     if (event.key === "ArrowUp") {
    //       pos.y -= 1;
    //     } else if (event.key === "ArrowDown") {
    //       pos.y += 1
    //     } else if (event.key === "ArrowRight") {
    //       pos.x += 1
    //     } else if (event.key === "ArrowLeft") {
    //       pos.x -= 1
    //     }
    //     return pos
    //   }
    
    //   runKey(event) {
    //     var newBoard = this.state.board;
    //     var xp = this.state.XP;
    //     var oldLoc = { ...this.state.playerPosition };
    //     var pos = this.movePlayer(event,{ ...this.state.playerPosition });
    //     var newPos = { x: pos.x, y: pos.y, isType: "PATH", occupiedBy: "PLAYER" };
    
    //     var oldLocationCell = newBoard.find(element => element.x === oldLoc.x && element.y === oldLoc.y && element.isType === "PATH");
    //     var newPlayerCell = newBoard.find(element => element.x === newPos.x && element.y === newPos.y && element.isType === "PATH");
    
    //     if (newPlayerCell === undefined) {
    //       newPlayerCell = oldLocationCell;
    //     }
    
    //     // var health = this.state.PLAYER_HEALTH
    //     // var weapons = ['stick', 'devil-fork', 'axe'];
        
    //     newBoard[newBoard.indexOf(newPlayerCell)] = { ...newPlayerCell, occupiedBy: "PLAYER", life: this.state.PLAYER_HEALTH }
    //     newBoard[newBoard.indexOf(oldLocationCell)] = { ...oldLocationCell, occupiedBy: "NONE", life: this.state.PLAYER_HEALTH }
    
    //     this.setState({ playerPosition: newPlayerCell, board: newBoard })
    //     return newPos;
    //   }
    
    


    render() {
        return (
            <div className='row txt-color'>
                <div style={{}} className="col-md-12 stats-area">
                    <span>HEALTH: {this.state.PLAYER_HEALTH}</span>
                    <span>DUNGEON:{this.state.dungeon}</span>
                    <span>WEAPON:{this.state.weapon}</span>
                    <span>XP:{this.state.XP}</span>
                    <span>LEVEL:{this.state.LEVEL}</span>
                    <a className="toggle-btn" onClick={() => this.changeToggleState()}>toggle</a>
                </div>

                <div className="col-md-8" >
                    <center>{this.state.board.map(block => <button onClick={() => this.returnNonWalls(block)} className={`${block.occupiedBy} ${block.isType} ${block.toggleState} grid-item`}>{`${block.x}:${block.y}`}</button>)}</center>
                </div>
            </div>
        );
    }
}

export default Stage3;
// {`${block.x}:${block.y}`}