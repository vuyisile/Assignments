import React from "react";
import { paths } from "./paths"
import { randomObject } from "./random-items"
import { connect } from "react-redux"
import { createBoard } from "./createboard"
import { secondLevelPaths } from "./second-level-path"
import { thirdLevel } from "./third-level"
import { updateUser } from "./actions/user-actions"
import "./index.css";

  class DungeonGame extends React.Component {
  constructor() {
    super();
    this.board = [];
    this.state = {
      xp: 0,
      status: "alive",
      board: [],
      toggleStatus: false,
      surroundings: [],
      level: 1,
      secondLevelPaths: secondLevelPaths,
      thirdLevel: thirdLevel,
      importedPath: paths,
      enemyHealth: 50,
      playerLoc: [],
      path: { x: 19, y: 1, type: "walkTrough" },
      oldLoc: {},
      newBoard: [],
      health: 150,
      weapon: { type: "knife", damage: 40 }

    };
    this.createBoard = this.createBoard.bind(this)
    this.toggleDarkness = this.toggleDarkness.bind(this)
    this.levelUp = this.levelUp.bind(this)
    this.keyListener = this.keyListener.bind(this)
    this.createItems = this.createItems.bind(this)
    this.createPathways = this.createPathways.bind(this)
    this.createPlayer = this.createPlayer.bind(this)
    this.health = this.health.bind(this)
    this.enemy = this.enemy.bind(this)
    this.weapon = this.weapon.bind(this)
  }
  health(path) {
    if (path.obj === "lives") {
      var increment = this.state.health;
      increment += 20;
      this.setState({ health: increment })
    }
  }
  enemy(path) {
    var enemy = path.life;
    var increment = this.state.health;
    increment -= 10;
    enemy -= this.state.weapon.damage;
    path.life = enemy;
    if (enemy <= 0) {
      var xp = this.state.xp;
      xp += 10
      this.setState({ status: this.state.status === "dead" ? "alive" : "dead", xp: xp })
    }
    increment === 0 ? alert("Wasted") : "";
    increment === 0 ? window.location.reload(true) : "";
    this.setState({ health: increment })
    this.setState({ enemyHealth: enemy })
  }
  weapon(path) {
    try {
      if (path.obj === "keys") {
        var increment = this.state.health;
        increment -= 20;
        const weaponsArray = [{ type: "Katana", damage: 40 }, { type: "Axe", damage: 60 }, { type: "Machete", damage: 60 }]
        const randomWeapon = Math.floor(Math.random() * 3);
        this.setState({ weapon: weaponsArray[randomWeapon] })
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  componentWillMount() {
    this.createBoard();
    document.onkeydown = this.keyListener;
    setTimeout(() => {
      this.createItems(this.state.board)
    }, 1000)
  }

  keyListener(event) {
    var grid = this.state.board.slice();
    var playerAt = this.state.playerLoc
    var occ = grid.find(x => x.x === playerAt.x - 1 && x.y === playerAt.y)

    if (event.key === "ArrowUp") {
      var newLoc = { x: playerAt.x - 1, y: playerAt.y, type: playerAt.type, player: playerAt.player, obj: playerAt.obj }
      var isPath = grid.find(x => x.x === newLoc.x && x.y === newLoc.y);
      this.weapon(isPath);
      if (isPath.type !== "wall" && occ.obj !== "item") {
        this.createPlayer(newLoc, playerAt)
        this.health(isPath);
      }
      else if (occ.obj === "item") {
        this.state.status === "dead" ? this.createPlayer(newLoc, playerAt) : "";
        this.enemy(isPath);
      }
      this.levelUp()
    }
    else if (event.key === "ArrowDown") {
      var belowItem = grid.find(x => x.x === playerAt.x + 1 && x.y === playerAt.y)
      console.log(event.key)
      var newLoc = { x: playerAt.x + 1, y: playerAt.y, type: "walkThrough" }
      var isPath = grid.find(x => x.x === newLoc.x && x.y === newLoc.y);
      this.weapon(isPath)
      if (isPath !== undefined) {
        if (isPath.type !== "wall" && belowItem.obj !== "item") {
          this.createPlayer(newLoc, playerAt)
          this.health(isPath);
        }
        else if (belowItem.obj === "item") {
          this.state.status === "dead" ? this.createPlayer(newLoc, playerAt) : "";
          this.enemy(isPath);
        }
        this.levelUp()
      }
    }

    else if (event.key === "ArrowLeft") {
      var newLoc = { x: playerAt.x, y: playerAt.y - 1, type: "walkThrough" }
      var leftItem = grid.find(x => x.x === playerAt.x && x.y === playerAt.y - 1)
      var isPath = grid.find(x => x.x === newLoc.x && x.y === newLoc.y);
      this.weapon(isPath)
      if (isPath !== undefined) {
        if (isPath.type !== "wall" && leftItem.obj !== "item") {
          this.createPlayer(newLoc, playerAt)
          this.health(isPath);
        }
        else if (leftItem.obj === "item") {
          this.state.status === "dead" ? this.createPlayer(newLoc, playerAt) : "";
          this.enemy(isPath);
        }
        this.levelUp()
      }
    }
    else if (event.key === "ArrowRight") {
      var newLoc = { x: playerAt.x, y: playerAt.y + 1, type: "walkThrough" }
      var rightItem = grid.find(x => x.x === playerAt.x && x.y === playerAt.y + 1)
      var isPath = grid.find(x => x.x === newLoc.x && x.y === newLoc.y);
      this.weapon(isPath)
      if (isPath.type !== "wall" && rightItem.obj !== "item") {
        this.createPlayer(newLoc, playerAt)
        this.health(isPath);
      }
      else if (rightItem.obj === "item") {
        this.state.status === "dead" ? this.createPlayer(newLoc, playerAt) : "";
        this.enemy(isPath);
      }
      this.levelUp()
    }
  }

  createPathways(current = this.state.importedPath) {
    var copy = this.board.slice()
    var pathsImported = current;
    for (var cell of pathsImported) {
      var boad = copy.find(x => cell.x === x.x && cell.y === x.y);
      if (boad !== undefined) {
        var indx = copy.indexOf(boad)
        var naw = { x: boad.x, y: boad.y, player: "", type: "walkThrough" }
        copy.splice(indx, 1, naw)
        this.setState({ board: copy })
        this.setState({ newBoard: copy })
      }
    }
  }

  createBoard() {
    this.setState({ board: createBoard() })
    this.board = createBoard();
    this.createPathways();
    setTimeout(x => this.createPlayer(), 1500)
  }

  levelUp() {
    if (this.state.xp === 50 && this.state.level === 1) {
      this.createPathways(this.state.secondLevelPaths)
      this.createItems(this.state.board);
      this.createPlayer();
      this.setState({ xp: 0, level: this.state.level + 1, })

    }
    else if (this.state.xp === 70 && this.state.level === 2) {
      this.createPathways(this.state.thirdLevel)
      this.createItems(this.state.board);
      this.createPlayer();
      this.setState({ xp: 0, level: this.state.level + 1, })

    }
  }

  createPlayer(path = this.state.path, oldLoc = this.state.oldLoc) {
    var passagesWays = this.state.board.slice()
    var foundIndex = passagesWays.find(x => path.x === x.x && path.y === x.y);
    var foundold = passagesWays.find(x => oldLoc.x === x.x && oldLoc.y === x.y);
    if (foundIndex !== undefined) {
      var indx = passagesWays.indexOf(foundIndex)
      var naw = { x: foundIndex.x, y: foundIndex.y, player: "isHere", type: "walkThrough" }
      passagesWays.splice(indx, 1, naw)
      this.setState({ board: passagesWays })
    }
    if (foundold !== undefined) {
      var old = passagesWays.indexOf(foundold)
      var oldnaw = { x: foundold.x, y: foundold.y, player: "", type: "walkThrough" }
      passagesWays.splice(old, 1, oldnaw)
    }
    this.setState({ oldLoc: foundold, playerLoc: path })
  }

  toggleDarkness() {
    let ShowThis = [];
    let arr = [];
    const currentMap = this.state.board
    const player = this.state.playerLoc;
    const logo = { x: player.x, y: player.y }
    const top = { x: player.x - 1, y: player.y }
    const bottom = { x: player.x + 1, y: player.y }
    const right = { x: player.x, y: player.y - 1 }
    const left = { x: player.x, y: player.y + 1 }
    const bottomLeft = { x: player.x + 1, y: player.y - 1 }
    const bottomRight = { x: player.x + 1, y: player.y + 1 }
    const topLeft = { x: player.x - 1, y: player.y - 1 }
    const topRight = { x: player.x - 1, y: player.y - 1 }
    ShowThis.push(top, logo, bottom, right, left, bottomLeft, bottomRight, topLeft, topRight);
    arr.push(this.state.playerLoc)
    for (let path of ShowThis) {
      let paths = this.state.board.find(x => x.x === path.x && x.y === path.y);
      if (paths !== undefined) {
        arr.push(paths)
      }
    }
    this.setState({ toggleStatus: !this.state.toggleStatus, surroundings: arr })
    console.log(arr)
  }

  createItems(board) {
    var currentPassesWays = board;
    const importedPath = this.state.importedPath;
    var randomItems = randomObject(importedPath);
    for (var path of randomItems) {
      var foundPath = currentPassesWays.find(x => x.x === path.x && x.y === path.y);
      if (foundPath !== undefined) {
        var old = currentPassesWays.indexOf(foundPath)
        var foundItem = randomItems.find(x => x.x === path.x && x.y === path.y);
        var addItem = {
          x: foundPath.x, y: foundPath.y, player: foundPath.player, type: foundPath.type, obj: foundItem.obj, life: foundItem.life
        }
        currentPassesWays.splice(old, 1, addItem)
        this.setState({ board: currentPassesWays })
      }
    }
  }


  render() {
    console.log(this.props)
    return (
      <div className="scores">
        <div>
          <button onClick={() => this.toggleDarkness()}>ToggleDarkness</button>
          <h2>life:{<h1>{this.state.health}</h1>}</h2>
          <h2>XP:{<h1>{this.state.xp}</h1>}</h2>
          <h2>level:{<h1>{this.state.level}</h1>}</h2>
          <h2>weapon:{<h1>{this.state.weapon.type}</h1>}</h2>
        </div>
        <div className="walls">
          {this.state.toggleStatus === true ? this.state.surroundings.map(x => <button className=
            {x.type === "walkThrough" ? "wall passage" : "wall barrier"}>
            {x.player === "isHere" && x.type === "walkThrough" ?
              <p className="div">{"\uD83D\uDC40"}</p> : ""}
            {x.obj === "item" && x.type === "walkThrough" ?
              <p className="items">{"\uD83D\uDE21"}</p> : ""}
            {x.obj === "lives" && x.type === "walkThrough" ?
              <p className="lives">{"\uD83D\uDC9A"}</p> : ""}
            {x.obj === "keys" && x.type === "walkThrough" ?
              <p className="keys">{"\uD83D\uDD31"}</p> : ""}
            {x.x}{x.y}
          </button>)
            : this.state.board.map(x => <button className=
              {x.type === "walkThrough" ? "wall passage" : "wall barrier"}>
              {x.player === "isHere" && x.type === "walkThrough" ?
                <p className="div">{"\uD83D\uDC40"}</p> : ""}
              {x.obj === "item" && x.type === "walkThrough" ?
                <p className="items">{"\uD83D\uDE21"}</p> : ""}
              {x.obj === "lives" ?
                <p className="lives">{"\uD83D\uDC9A"}</p> : ""}
              {x.obj === "keys" ?
                <p className="keys">{"\uD83D\uDD31"}</p> : ""}
            </button>)}
        </div>
      </div>
    );
  }
}
const mapActionsToProps = {
  onUpdateUser:updateUser

}
const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps)(DungeonGame)
