import React, { Component } from 'react';
import './index.css';
import { createBoard, placeEnemy, placeLifePill, placePlayer } from './game/game-builders'
import { pathOne } from './game/dungeon-one'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(),
      path: placeLifePill(placeEnemy(placePlayer(pathOne))),
      playerPosition: null,
      XP: 0,
      ENEMY_HEALTH: 100,
      PLAYER_HEALTH: 100,
      dungeon: 1,
      weapon: 'stick'

    }
    this.runKey = this.runKey.bind(this)
  }



  componentWillMount() {
    var currentBoard = this.state.board;
    var path = this.state.path;
    for (var i in currentBoard) {
      for (var j in path) {
        if (currentBoard[i].x === path[j].x && currentBoard[i].y === path[j].y) {
          currentBoard[i] = path[j];
        }
      }
    }

    var playerPos = currentBoard.find((cell) => cell.occupiedBy === 'PLAYER');
    this.setState({ board: currentBoard, playerPosition: playerPos, path: path })

    document.onkeydown = this.runKey;
  }
  returnNonWalls(path) {
    var room = this.state.path;
    path.isType = 'PATH';
    room.push(path);
    this.setState({ path: room })
  }

  runKey(event) {
    var pos = { ...this.state.playerPosition };
    var oldLoc = { ...this.state.playerPosition };
    var playerHealth = this.state.PLAYER_HEALTH;
    var enemyHealth = this.state.ENEMY_HEALTH;
    var xp = this.state.XP;
    if (event.key === "ArrowUp") {
      pos.y -= 1;
    } else if (event.key === "ArrowDown") {
      pos.y += 1
    } else if (event.key === "ArrowRight") {
      pos.x += 1
    } else if (event.key === "ArrowLeft") {
      pos.x -= 1
    }
    var newPos = { x: pos.x, y: pos.y, isType: "PATH", occupiedBy: "PLAYER" };
    var newBoard = this.state.board;
    var oldLocationCell = newBoard.find(element => element.x === oldLoc.x && element.y === oldLoc.y && element.isType === "PATH");
    var newPlayerCell = newBoard.find(element => element.x === newPos.x && element.y === newPos.y && element.isType === "PATH");
  

    if (newPlayerCell === undefined) {
      newPlayerCell = oldLocationCell;
    }
    var health = this.state.PLAYER_HEALTH
    if (newPlayerCell.occupiedBy === 'LIFE-PILL') {
      this.setState({ PLAYER_HEALTH: health + 100 })

    }
    if (newPlayerCell.occupiedBy === 'ENEMY') {
      this.setState({ PLAYER_HEALTH: health - newPlayerCell.impact })
      newPlayerCell.life -= 25
      if (newPlayerCell.life > 0) {
        console.log('Enemy life', newPlayerCell.life)
        this.setState({ XP: xp + 25 })
        newPlayerCell = oldLocationCell;
      }
    }
console.log('pos',newBoard.indexOf(newPlayerCell))
    newBoard[newBoard.indexOf(newPlayerCell)] = { ...newPlayerCell, occupiedBy: "PLAYER", life: this.state.PLAYER_HEALTH }
    newBoard[newBoard.indexOf(oldLocationCell)] = { ...oldLocationCell, occupiedBy: "NONE", life: this.state.PLAYER_HEALTH }

    this.setState({ playerPosition: newPlayerCell, board: newBoard })
    return newPos;
  }



  render() {
    console.log('board', this.state.board)
    return (
      <div>
        <div className="col-md-12" >
          <a>HEALTH: {this.state.PLAYER_HEALTH}</a>
          <a>DUNGEON:{this.state.dungeon}</a>
          <a>WEAPON:{this.state.weapon}</a>
          <a>XP:{this.state.XP}</a>
        </div>

        <div className="board-container col-md-12" >
          <center>{this.state.board.map(block => <button onClick={() => this.returnNonWalls(block)} className={`${block.occupiedBy} ${block.isType} `}></button>)}</center>
        </div>
      </div>
    );
  }
}

export default App;
