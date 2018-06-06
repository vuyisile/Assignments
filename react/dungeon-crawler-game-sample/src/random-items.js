function randomObject(passageWays) {
    var StoredPassageWays = passageWays;
    var arr = [];
    var i = 0;
    var count = 0;
    while (i < 40) {
        var randomItem = Math.floor(Math.random() * 19);
        var randomItem3 = Math.floor(Math.random() * 14);
        var check = { x: randomItem, y: randomItem3 };
        var Isfound = StoredPassageWays.find(x => x.x === check.x && x.y === check.y)
        if (Isfound !== undefined && count < 3) {
            arr.push({ x: Isfound.x, y: Isfound.y, player: Isfound.player, type: Isfound.type, obj: "lives", life: 60 })
            count++;
        }
        else if (Isfound !== undefined && count < 4) {
            arr.push({ x: Isfound.x, y: Isfound.y, player: Isfound.player, type: Isfound.type, obj: "keys", life: 60 })
            count++;
        }
        else if (Isfound !== undefined && count >= 4) {
            arr.push({ x: Isfound.x, y: Isfound.y, player: Isfound.player, type: Isfound.type, obj: "item", life: 60 })
            count++;
        }
        i++
    }
    return arr;
}
module.exports = { randomObject } 