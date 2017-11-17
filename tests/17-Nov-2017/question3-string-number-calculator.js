function addStringNumbers(strNum){
     var nums = /(\d)(\d)|(\d).(\d)|\d/g;
     var strNum2 = strNum.replace(/(\d),(\d)/g,"$1''$2");
    var checkForNum = strNum2.match(nums);
    var sum = 0;
    
    for(var i in checkForNum){
       
        if(checkForNum === null){
            sum+=0;
        }
       sum += parseFloat(checkForNum[i]);
    }
    return sum;
}

console.log(addStringNumbers("1,2"));
console.log(addStringNumbers(""));
console.log(addStringNumbers("1jkk4kj86 po1.6"));
