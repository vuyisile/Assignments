// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  var argsArr = Array.from(arguments);
  var combo = [];
  var result = [];
  for(var i in argsArr){
    var valOfIndex = argsArr[i];
    for(var n in valOfIndex){
      
       combo.push(valOfIndex[n]);
       
     }
  }
  
  result = combo.filter(function(value1,value2){
    return combo.indexOf(value1) === value2;
  });
 
  return result;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
