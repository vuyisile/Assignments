function addStringNumbers(){
    var strNum = Array.from(arguments); 
    var nums = /(\d)(\d)|(\d).(\d)|\d/g;
    var sum = 0;
    for(var i in strNum){
        if(strNum[i].match(nums) !== null){

            sum += parseFloat(strNum[i]);
        }
      sum += 0;
    }
    return sum;
}

console.log(addStringNumbers("1.2",'3','8','y'));
console.log(addStringNumbers("","1.2",'3'));
console.log(addStringNumbers("1",'89'));
