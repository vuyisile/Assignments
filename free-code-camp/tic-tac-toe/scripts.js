var playerChoice = "";
var comp = "";
var currentPlay = "";

function characterX() {
    playerChoice = 'X'
    alert('You chose to play as X')
}
function characterO() {
    playerChoice = 'O'
    alert('You chose to play as O')
}



function accessBox(id) {
    playB1(id);
}
function playB1(ID) {
    if (playerChoice === 'X') {
        comp = 'O'
    } else {
        comp = 'X'
    }
    currentPlay = document.getElementById(ID).innerHTML;
    if (currentPlay !== playerChoice && currentPlay !== comp) {
        document.getElementById(ID).innerHTML = playerChoice;

        if(document.getElementById('b1').innerHTML === playerChoice){
            document.getElementById('b2').innerHTML = comp;
        }else if(document.getElementById('b2').innerHTML === playerChoice && document.getElementById('b1').innerHTML !== comp){
            document.getElementById('b1').innerHTML = comp;
        }

        // if (document.getElementById('b1').innerHTML === playerChoice && document.getElementById('b1').innerHTML !== comp) {
        //     document.getElementById('b2').innerHTML = comp;
        // } else if (document.getElementById('b4').innerHTML === comp && (document.getElementById('b2').innerHTML !== comp && document.getElementById('b2').innerHTML !== playerChoice)) {
        //     document.getElementById('b5').innerHTML = comp;
        // } else {
        //     document.getElementById('b4').innerHTML = comp;
        // }

    }
    console.log(currentPlay)
}
