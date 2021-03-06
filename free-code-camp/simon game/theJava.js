var colors = ['red', 'blue', 'yellow', 'green']
var compCombination = [];
var playerCombination = [];
var score = 1;
var i = 1;
var strictMode = 0;

function switchOn() {
    var state = document.getElementById('switchON');
    var state2 = document.getElementById('switchOFF');
    state.style.background = 'green';
    state2.style.background = '#FFA000';
}

function switchOff() {
    var state = document.getElementById('switchOFF');
    var state2 = document.getElementById('switchON');
    state.style.background = 'red';
    state2.style.background = '#FFA000';
}

function start() {
    document.getElementById('score').innerHTML = score;
    var random = Math.floor(Math.random() * colors.length);

    if (compCombination.length < i) {
        var currentColor = colors[random];
        compCombination.push(currentColor);
        i += 1;
    }
    currentColor = "";
    return compCombination
}


function playUser(id) {
    if (playerCombination.length < i) {
        if (id === 'red') {
            document.getElementById('red').style.background = '#C62828';
            setTimeout(function () {
                document.getElementById('red').style.background = 'white';
            }, 500);
            playerCombination.push('red');
        } else if (id === 'green') {
            document.getElementById('green').style.background = '#4CAF50';
            setTimeout(function () {
                document.getElementById('green').style.background = 'white';
            }, 500);
            playerCombination.push('green');
        } else if (id === 'blue') {
            document.getElementById('blue').style.background = '#1976D2';
            setTimeout(function () {
                document.getElementById('blue').style.background = 'white';
            }, 500);
            playerCombination.push('blue');
        } else if (id === 'yellow') {
            document.getElementById('yellow').style.background = '#FFB300';
            setTimeout(function () {
                document.getElementById('yellow').style.background = 'white';
            }, 500);
            playerCombination.push('yellow');
        }
    }
    console.log('playerCombination : ', playerCombination);
    var checker = checkMatch(compCombination, playerCombination);
    //var strict = strict();
    if (playerCombination.length === compCombination.length && checker === true) {
        setTimeout(() => runGame(), 1000);
        playerCombination = [];
        score += 1;
        document.getElementById('score').innerHTML = score;
    } else if (playerCombination.length === compCombination.length && checker === false && strictMode === 1) {
        playerCombination = [];
        compCombination = [];
        document.getElementById('switchON').style.background = '#FFA000';
        document.getElementById('switchOFF').style.background = 'red';
        alert("sorry colors don't match, you lose!");
        score = 1;
         document.getElementById('score').innerHTML = '--';
       
    }else if(playerCombination.length === compCombination.length && checker === false && strictMode === 0){
         score -= 1;
         document.getElementById('score').innerHTML = score;
         alert("wrong pattern please try again.");
         setTimeout(() => runGame(), 1000);
         console.log(compCombination)
    
    }

}





function runGame() {
    var stateColor = document.getElementById('switchON').style.background;
    if (stateColor === 'green none repeat scroll 0% 0%') {
        compCombination = start();
        flashUp(compCombination);
    }
}

function flashUp(compCombination) {
    var i = 0;

    var interval = setInterval(function () {
        document.getElementById(compCombination[i]).style.background = compCombination[i];
        setTimeout(function () {
            document.getElementById(compCombination[i - 1]).style.background = 'white';
        }, 500);

        i++;

        if (i >= compCombination.length) {
            clearInterval(interval);
        }
    }, 1000)



}

function checkMatch(comp, player) {
    comp = comp.toString();
    player = player.toString();
    if (player === comp) {
        return true;
    } else {
        return false;
    }
}

function strict(){
    if(strictMode === 0){
        strictMode+=1;
        alert('you are on strict mode');
       console.log(strictMode);
        return true;
    }else if(strictMode > 0){
        strictMode = 0;
        alert('strict mode is off!');
      console.log(strictMode);
        return false;
    }
  
}