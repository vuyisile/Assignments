import React, { Component } from 'react';
import './index.css';
import { createBoard, initiateState, placeEnemy, placeLifePill, placePlayer, placeDoor, placeWeapon } from './game/game-builders'
import { pathOne } from './game/dungeon-one'
import { pathTwo } from './game/dungeon-two'
import { pathThree } from './game/dungeon-three'
import Stage1 from './stages/stage1'
import Stage2 from './stages/stage2'
import Stage3 from './stages/stage3'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      path: [],
      playerPosition: null,
      XP: 0,
      LEVEL: 0,
      ENEMY_HEALTH: 100,
      PLAYER_HEALTH: 100,
      dungeon: 1,
      weapon: 'stick',
      allPaths: [pathOne, pathTwo, pathThree],
      indexOfPath: 0,
      toggleState: false,
      passage:''

    }
    this.updateBoard = this.updateBoard.bind(this)
  }
  toggleField(player) {
    var theBoard = this.state.board;
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

    this.setState({ board: theBoard, playerPosition: player })
  }

  movePlayer(event,pos){
    if (event.key === "ArrowUp") {
      pos.y -= 1;
    } else if (event.key === "ArrowDown") {
      pos.y += 1
    } else if (event.key === "ArrowRight") {
      pos.x += 1
    } else if (event.key === "ArrowLeft") {
      pos.x -= 1
    }
    return pos
  }

  runKey(event) {
    var newBoard = this.state.board;
    var xp = this.state.XP;
    var oldLoc = { ...this.state.playerPosition };
    var pos = this.movePlayer(event,{ ...this.state.playerPosition });
    var newPos = { x: pos.x, y: pos.y, isType: "PATH", occupiedBy: "PLAYER" };

    var oldLocationCell = newBoard.find(element => element.x === oldLoc.x && element.y === oldLoc.y && element.isType === "PATH");
    var newPlayerCell = newBoard.find(element => element.x === newPos.x && element.y === newPos.y && element.isType === "PATH");

    if (newPlayerCell === undefined) {
      newPlayerCell = oldLocationCell;
    }

    // var health = this.state.PLAYER_HEALTH
    // var weapons = ['stick', 'devil-fork', 'axe'];
    
    newBoard[newBoard.indexOf(newPlayerCell)] = { ...newPlayerCell, occupiedBy: "PLAYER", life: this.state.PLAYER_HEALTH }
    newBoard[newBoard.indexOf(oldLocationCell)] = { ...oldLocationCell, occupiedBy: "NONE", life: this.state.PLAYER_HEALTH }

    this.setState({ playerPosition: newPlayerCell, board: newBoard })
    return newPos;
  }

updateBoard(currentBoard,path){
  this.setState({board:currentBoard,path})
}
  render() {
    return (
      <div className='row txt-color'>
        <Stage3 updateBoard={this.updateBoard} runKey={this.runKey}/>
      </div>
    );
  }
}

export default App;
// {`${block.x}:${block.y}`}