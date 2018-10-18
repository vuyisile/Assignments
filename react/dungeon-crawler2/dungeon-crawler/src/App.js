import React, { Component } from 'react';
import './index.css';
import { createBoard, placeEnemy, placeLifePill, placePlayer, placeAll, resetDungeon } from './game/game-builders'
import { pathOne } from './game/dungeon-one'
import { pathTwo } from './game/dungeon-two'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(),
      path: placeAll(pathOne, 'devil-fork'),
      playerPosition: null,
      XP: 0,
      LEVEL: 0,
      ENEMY_HEALTH: 100,
      PLAYER_HEALTH: 100,
      dungeon: 1,
      weapon: 'stick',
      allPaths: [pathOne, pathTwo],
      indexOfPath: 0

    }
    this.runKey = this.runKey.bind(this)
  }

  returnInitialState() {

  }
  createDungeon(clearPath) {
    console.log('clear', clearPath)
    var newPath = placeAll(clearPath);
    this.setState({ path: newPath })
    var newBoard = this.state.board;
    for (var i in newBoard) {
      for (var j in newPath) {
        if (newBoard[i].x === newPath[j].x && newBoard[i].y === newPath[j].y) {
          newBoard[i] = newPath[j];
        }
      }
    }
    return newBoard
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


  changeLevel() {
    var level = this.state.LEVEL;
    var xp = this.state.XP;
    if (xp >= 75) {
      this.setState({ LEVEL: level + 1, XP: 0 })
    }
  }

  changeDungeon() {
    var indexOfPath = this.state.indexOfPath;
    var newPath = this.state.allPaths[indexOfPath + 1];
    var boardWithNoPath = createBoard();

    var challenge = placeAll(newPath);
    this.setState({ path: challenge });


    for (var i in boardWithNoPath) {
      for (var j in challenge) {
        if (boardWithNoPath[i].x === challenge[j].x && boardWithNoPath[i].y === challenge[j].y) {
          boardWithNoPath[i] = challenge[j];
        }
      }
    }
    var newBoard = boardWithNoPath;
    return newBoard
  }

  runKey(event) {
    this.changeLevel();
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
      newPlayerCell = newBoard.find(element => element.x === newPos.x && element.y === newPos.y && element.isType === "PATH");
      console.log('newPlayerCell undefined:', newPlayerCell)
    }

    var health = this.state.PLAYER_HEALTH
    switch (newPlayerCell.occupiedBy) {
      case 'LIFE-PILL':
        this.setState({ PLAYER_HEALTH: health + 100 })
        break;
      case 'WEAPON':
        this.setState({ weapon: newPlayerCell.weapon })
        break;
      case 'DOOR':
        newBoard = this.changeDungeon()
        break;
    }
  
    if (newPlayerCell.occupiedBy === 'ENEMY') {
      this.setState({ PLAYER_HEALTH: health - newPlayerCell.impact })
      if (this.state.weapon === 'stick') newPlayerCell.life -= 20;
      if (this.state.weapon === 'axe') newPlayerCell.life -= 35;
      if (this.state.weapon === 'devil-fork') newPlayerCell.life -= 75;
      if (newPlayerCell.life > 0) {
        this.setState({ XP: xp + 12 })
        newPlayerCell = oldLocationCell;
      }
    }

    if (this.state.PLAYER_HEALTH === 0) {
      alert('you are dead!!')
      window.location.reload()
      this.setState({ PLAYER_HEALTH: 100, weapon: 'stick', dungeon: 1, XP: 0 })
    }


    newBoard[newBoard.indexOf(newPlayerCell)] = { ...newPlayerCell, occupiedBy: "PLAYER", life: this.state.PLAYER_HEALTH }
    newBoard[newBoard.indexOf(oldLocationCell)] = { ...oldLocationCell, occupiedBy: "NONE", life: this.state.PLAYER_HEALTH }

    this.setState({ playerPosition: newPlayerCell, board: newBoard })
    return newPos;
  }



  render() {
    return (
      <div className='row txt-color'>
        <table>
          <thead>
            <td>
              <div>
                <span>HEALTH: {this.state.PLAYER_HEALTH}</span>
                <span>DUNGEON:{this.state.dungeon}</span>
                <span>WEAPON:{this.state.weapon}</span>
                <span>XP:{this.state.XP}</span>
                <span>LEVEL:{this.state.LEVEL}</span>
              </div>
            </td>
          </thead>
          <tbody>
            <td>
              <div className="board-container col-md-8" >
                <center>{this.state.board.map(block => <button onClick={() => this.returnNonWalls(block)} className={`${block.occupiedBy} ${block.isType} `}></button>)}</center>
              </div>
            </td>
          </tbody>
        </table>


      </div>
    );
  }
}

export default App;
