function addStringNum(strNum){
    var sum = 0;
    if(strNum.length === 0){
        sum+=0;
    }else{
        sum+=parseInt(strNum);
    }
    return sum;
}

console.log(addStringNum(""));

console.log(addStringNum("1"));
