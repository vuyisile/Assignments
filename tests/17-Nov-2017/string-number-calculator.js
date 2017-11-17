function addStringNumbers(strNum){
    var nums = /\d/g;
    var checkForNum = strNum.match(nums);
    var sum = 0;
    for(var i in checkForNum){
        if(checkForNum === null){
            sum+=0;
        }
       sum += parseInt(checkForNum[i]);
    }
    return sum;
}

console.log(addStringNumbers("1jkk4kj89 po1.2"));
console.log(addStringNumbers(""));
console.log(addStringNumbers("1jkk4kj89 po1.6"));
