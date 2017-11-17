function addStringNumbers(strNum){
     var nums = /\d/g;

    var checkForNum = strNum.match(nums);
    var sum = 0;
    
    for(var i in checkForNum){
       
        if(checkForNum !== null && checkForNum.length <= 2){
           sum += parseFloat(checkForNum[i]);
        }
         sum+=0;
       
    }
    return sum;
}

console.log(addStringNumbers("1,2"));
console.log(addStringNumbers(""));
console.log(addStringNumbers("1"));