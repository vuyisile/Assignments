function addStringNumbers(strNum){
    var nums = /\d/g;
    var checkForNum = strNum.match(nums);
    var sum = 0;
    for(var i in strNum){
        if(strNum[i] === "" || " "){
            sum += 0;
        }
    }
    return sum;
}

console.log(addStringNumbers(""));