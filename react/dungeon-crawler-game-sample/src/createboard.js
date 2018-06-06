function createBoard() {
    let arr = [];
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            arr.push({ x: i, y: j, player: "", type: "wall" })
        }
    }
    return arr;
}
module.exports = { createBoard }