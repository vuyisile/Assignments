/*function getMidVal(str){
    var strLen = str.length;
    var calc = 0;
    var i = 0;
    var result = '';
     if(strLen % 2 === 1){
        calc = strLen/2;
        i = Math.floor(calc);
        result = ` ${str[i]}`;
    }
    else{
        calc = strLen/2;
        i = Math.floor(calc);
        result = `${str[i]}${str[i+1]}` ;
    }
    
    return result;
}

console.log(getMidVal("hello"));
console.log(getMidVal("hey"))*/

function XO(str) {
    //code here
    var alpha1=0;
    var alpha2=0;
    var sorted = str.split().sort();
    return sorted;
    for(var i in sorted){
      if(sorted[i] === sorted[i++]){
        alpha1 += sorted[i];
      }
      else if(sorted[i] !== sorted[i++]){
        alpha2 += sorted[i] 
      }
    }
     
}
    
console.log(XO("ononooo"))