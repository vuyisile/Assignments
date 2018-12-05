function runKey(event) {
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
