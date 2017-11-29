function addStringNum(strNum) {
    var sum = 0;
    var error =[];
   
    if(/[//-|\W]/g.exec(strNum)){
        strNum = strNum.replace(/(\d)-(\d)/g,'$1,$2');
    }
    if(/,\n/g.exec(strNum)){
        return new Error ('invalid structure');
    }
    var matchNum = strNum.match(/(\d)(\d)|(\d)|(-\d)/g);

    for (var i in matchNum) {
        if (matchNum === null) {
            sum += 0;
        }
        if (parseInt(matchNum[i])<0) {
            error.push(matchNum.filter((val)=> Number(val) < 0));
           
            return new Error (`negative(-) numbers are not allowed e.g: '${error}'`);
        }
        sum += parseInt(matchNum[i]);
    }
    return sum;
}

console.log(addStringNum("")+'\n');
console.log(addStringNum("1")+'\n');
console.log(addStringNum("1,2")+'\n');
console.log(addStringNum("1,\n")+'\n');
console.log(addStringNum("//:\n2,61:4")+'\n');  
console.log(addStringNum("//-/1,3-3")+'\n'); 
console.log(addStringNum("//,-8\n2,9,-4,6,8,9,-6")+'\n');            
