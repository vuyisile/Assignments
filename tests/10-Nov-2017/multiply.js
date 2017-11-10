function multiply(n,k){
  if(k){
    return n * k;
  }
  var multiply = function (num){
    return n * num;
  }
 
  
  return multiply;
}


console.log(multiply(3,3));   //Output 9
console.log(multiply(3)(3));  //Output 9*