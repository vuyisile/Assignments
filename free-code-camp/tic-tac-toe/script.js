var player = ''
var comp = ''
var playerPatterns = []
var compPatterns = []


var playerChoice = ''
var boxId = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9']
var usedVals = function (val) {
  return val !== id
}
function characterX() {
  playerChoice = 'X'
  alert('You chose to play as X')
}
function characterO() {
  playerChoice = 'O'
  alert('You chose to play as O')
}
var winningCombinations = [['b1', 'b2', 'b3'], ['b4', 'b5', 'b6'], ['b7', 'b8', 'b9'], ['b1', 'b4', 'b7'], ['b2', 'b5', 'b8'], ['b3', 'b6', 'b9'], ['b1', 'b5', 'b9'], ['b3', 'b5', 'b7']]
function accessBox(id) {

  if (playerChoice === 'X') {

    comp = 'O'
  } else {
    comp = 'X'
  }

  document.getElementById(id).innerHTML = playerChoice
  playerPatterns.push(id)
  console.log('player: ',playerPatterns)
  // var test = winningCombinations.findIndex(playerPatterns);
  // console.log('test:',test);
  var currentMove = moves(id)
  if (compPatterns.indexOf(currentMove) === -1) {
    setTimeout(function(){
      document.getElementById(currentMove).innerHTML = comp},500)
    compPatterns.push(currentMove)
  }

  console.log('comp: ',compPatterns)

}
function moves(ID) {
  var possibleComb = []
  var filtered = []
  var concatedComb = []
  winningCombinations.forEach(function (element) {
    for (var index = 0; index < element.length; index++) {
      if (element[index] === ID) {
        possibleComb.push(element)
      }
    }
  })

  boxId = boxId.filter((element) => element !== ID)
  var random = Math.floor(Math.random() * boxId.length);
  computerMove = boxId[random];
    boxId = boxId.filter((element) => element !== computerMove)
  while (compPatterns.indexOf(computerMove) === -1 && playerPatterns.indexOf(computerMove) === -1) {
    console.log("boxes left : ", boxId)
    // console.log("computerMove : " + computerMove)
     
    return computerMove
  }
 

}

function test() {
  var test = document.getElementById("b1").innerText;
  console.log(test)
}

function displayGame() {
  $("#select").remove();
  $("#game").html(`<center>
        <h1 class = "h1-s2">Tic Tac Toe</h1>
        <div class="row container">
            <button class="col-md-4 cell" id="b1" onclick = "accessBox('b1');"></button>
            <button class="col-md-4 cell" id="b2" onclick = "accessBox('b2')"></button>
            <button class="col-md-4 cell" id="b3" onclick = "accessBox('b3')"></button>
            <button class="col-md-4 cell" id="b4" onclick = "accessBox('b4')"></button>
            <button class="col-md-4 cell" id="b5" onclick = "accessBox('b5')"></button>
            <button class="col-md-4 cell" id="b6" onclick = "accessBox('b6')"></button>
            <button class="col-md-4 cell" id="b7" onclick = "accessBox('b7')"></button>
            <button class="col-md-4 cell" id="b8" onclick = "accessBox('b8')"></button>
            <button class="col-md-4 cell" id="b9" onclick = "accessBox('b9')"></button>
        </div>
    </center>`)
}