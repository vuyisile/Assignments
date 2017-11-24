function addStringNum(strNum) {
    var sum = 0;
    var matchNum = strNum.match(/(\d)|(-\d)/g);
    for (var i in matchNum) {
        if (matchNum === null) {
            sum += 0;
        }
        if (parseInt(matchNum[i])<0) {
            return "negative numbers are not allowed"
        }
        sum += parseInt(matchNum[i]);
    }
    return sum;
}

console.log(addStringNum(""));
console.log(addStringNum("1"));
console.log(addStringNum("1,2"));
console.log(addStringNum("1\n2,6"));  
console.log(addStringNum("//;1\n3;4")); 
console.log(addStringNum("1\n2,9,-4,6,8,9,-6"));            
