
function pushZero() {
    document.getElementById("input-box").innerHTML += 0;
    return true;
}
function pushOne() {
    document.getElementById("input-box").innerHTML += 1;
    return true;
}
function pushTwo() {
    document.getElementById("input-box").innerHTML += 2;
    return true;
}
function pushThree() {
    document.getElementById("input-box").innerHTML += 3;
    return true;
}
function pushFour() {
    document.getElementById("input-box").innerHTML += 4;
    return true;
}
function pushFive() {
    document.getElementById("input-box").innerHTML += 5;
    return true;
}
function pushSix() {
    document.getElementById("input-box").innerHTML += 6;
    return true;
}
function pushSeven() {
    document.getElementById("input-box").innerHTML += 7;
    return true;
}
function pushEight() {
    document.getElementById("input-box").innerHTML += 8;
    return true;
}
function pushNine() {
    document.getElementById("input-box").innerHTML += 9;
    return true;
}

function pushCommaSign() {
    document.getElementById("input-box").innerHTML += '.';
    return true;
}


function pushDivideSign() {
    document.getElementById("input-box").innerHTML += '/';
    return true;
}

function pushMultiplicationSign() {
    document.getElementById("input-box").innerHTML += '*';
    return true;
}

function pushPlusSign() {
    document.getElementById("input-box").innerHTML += '+';
    return true;
}

function pushSubtractionSign() {
    document.getElementById("input-box").innerHTML += '-';
    return true;
}

function pushAdditionSign() {
    document.getElementById("input-box").innerHTML += '+';
    return true;
}

function clearEntry() {
    var id = document.getElementById("input-box");
    var value = id.value;
    value = value.substring(0, value.length - 1);
    id.innerHTML = value;
}

function allClear() {
    document.getElementById("input-box").innerHTML = "";
}

function calculate() {
    var id = document.getElementById("input-box");
    var entry = document.getElementById("input-box").value;
    var answer = eval(entry);
    console.log(answer);
    id.innerHTML = answer;
}

