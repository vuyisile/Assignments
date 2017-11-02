// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.


function sumAll(arr) {
  
  var reduceToMin = arr.reduce(function(a,b){
      var minNum = Math.min(a,b); 
    return minNum;
  });
  var reduceToMax = arr.reduce(function(a,b){
      var maxNum = Math.max(a,b);   
    return maxNum;
  });
  
  var result = 0;
  var i = reduceToMin;
  
  while( i <= reduceToMax){
   result += i; 
   i++;
  }
   
 
  return result;
}

sumAll([1,4]);