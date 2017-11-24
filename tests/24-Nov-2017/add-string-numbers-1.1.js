function addStringNum(strNum) {
    var sum = 0;
    var matchNum = strNum.match(/\d/g);
    for(var i in matchNum) {
        if(matchNum === null){
            sum+=0;
        }
        sum += parseInt(matchNum[i]);
    }
    return sum;
}

console.log(addStringNum(""));
console.log(addStringNum("1"));
console.log(addStringNum("1,2"));
console.log(addStringNum("1,2\n10"));