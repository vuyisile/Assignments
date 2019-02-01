import React, { Component } from 'react';
import './index.css';
import { createBoard, initiateState, placeEnemy, placeLifePill, placePlayer, placeDoor, placeWeapon } from './game/game-builders'
import { pathOne } from './game/dungeon-one'
import { pathTwo } from './game/dungeon-two'

class App extends Component {
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
      allPaths: [pathOne, pathTwo, pathOne],
      indexOfPath: 0,
      toggleState: false
    }
    this.toggleField = this.toggleField.bind(this)
    this.runKey = this.runKey.bind(this)
  }

  componentDidMount() {
    var currentBoard = this.state.board;
    var path = initiateState(pathOne, 'devil-fork');
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

  switchToggleState(state) {
    if (state === true) {
      state = false
    } else {
      state = true
    }
    this.setState({ toggleState: state })
    return state;
  }

  changeToggleState() {
    var toggleState = this.switchToggleState(this.state.toggleState);
    var theBoard = this.state.board;
    if (toggleState === true) {
      for (var block of theBoard) {
        block.toggleState = "OFF";
      }
      this.toggleField(this.state.playerPosition);
      this.setState({ board: theBoard })
    } else if (toggleState === false) {
      for (var cell of theBoard) {
        cell.toggleState = "ON";
      }
    }
  }

  changeDungeon() {
    var indexOfPath = this.state.indexOfPath;
    var newPath = this.state.allPaths[indexOfPath+1];
    var boardWithNoPath = createBoard();

    var weapon = () => ['axe', 'devil-fork', 'stick'][Math.floor(Math.random() * 3)];
    var challenge = initiateState(newPath, weapon)
    var oldPlayer = challenge.find((cell) => cell.x === this.state.playerPosition.x && cell.y === this.state.playerPosition.y);
    if (oldPlayer) {
      oldPlayer.occupiedBy = "NONE"
    }
    var newPlayerCell = challenge.find((cell) => cell.occupiedBy === 'PLAYER');
    this.setState({ path: challenge, playerPosition: newPlayerCell });


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
    this.changeLevel();
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

    var health = this.state.PLAYER_HEALTH
    var weapons = ['stick', 'devil-fork', 'axe'];
    switch (newPlayerCell.occupiedBy) {
      case 'LIFE-PILL':
        this.setState({ PLAYER_HEALTH: health + 100 })
        break;
      case 'WEAPON':
        this.setState({ weapon: weapons[Math.floor(Math.random() * (weapons.length))] })
        break;
      case 'DOOR':
        newBoard = this.changeDungeon();
        newPlayerCell = newBoard.find(element => element.x === this.state.playerPosition.x && element.y === this.state.playerPosition.y);
        break;
      case 'PLAYER':
        newPlayerCell = newBoard.find(obj => obj.occupiedBy === "PLAYER");
        break;
      case undefined:
        newPlayerCell = newBoard.find(element => element.x === this.state.playerPosition.x && element.y === this.state.playerPosition.y);
        break;
    }
    if (this.state.toggleState === true) {
      this.toggleField(newPlayerCell);
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

export default App;
// {`${block.x}:${block.y}`}