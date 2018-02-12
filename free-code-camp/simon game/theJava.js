var colors = ['red', 'blue', 'yellow', 'green']
var compCombination = [];
var playerCombination = [];
var count = 0;
var i = 1;
function start() {
    //debugger;
    var random = Math.floor(Math.random() * colors.length);

    if (compCombination.length < i) {
        var currentColor = colors[random];
        compCombination.push(currentColor);
        i += 1;
        console.log("compCombination", compCombination)
    }

    return compCombination
}


function playUser(id) {
    if (playerCombination.length < i) {
        if (id === 'red') {
            document.getElementById('red').style.background = '#C62828';
            setTimeout(function () {
                document.getElementById('red').style.background = 'none';
            }, 500);
            playerCombination.push('#C62828');
        } else if (id === 'green') {
            document.getElementById('green').style.background = '#4CAF50';
            setTimeout(function () {
                document.getElementById('green').style.background = 'none';
            }, 500);
            playerCombination.push('#4CAF50');
        } else if (id === 'blue') {
            document.getElementById('blue').style.background = '#1976D2';
            setTimeout(function () {
                document.getElementById('blue').style.background = 'none';
            }, 500);
            playerCombination.push('#1976D2');
        } else if (id === 'yellow') {
            document.getElementById('yellow').style.background = '#FFB300';
            setTimeout(function () {
                document.getElementById('yellow').style.background = 'none';
            }, 500);
            playerCombination.push('#FFB300');
        }
    }
    if (playerCombination.length === compCombination.length) {
        setTimeout(() => runGame(), 1000);
       
        playerCombination = [];
    }
    //clearTimeout(runGame(), 3000);
    console.log('playerCombination : ', playerCombination);

}





function runGame() {
    compCombination = start();
    var lightUp = flashUp(compCombination);
    setTimeout(lightUp, 500);
}


function flashUp(compCombination) {
    var i = 0;
    
    var interval = setInterval(function () {
        document.getElementById(compCombination[i]).style.background = compCombination[i];
        
        setTimeout(function () {
            console.log('working', compCombination[i-1],i);
            document.getElementById(compCombination[i-1]).style.background = 'none';
        }, 500);
        i ++;

    }, 1000)
    if (i >= compCombination.length) {
        clearInterval(interval);
        i = 0;
    }
}