// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  
  function compareWithFirst(fir,sec){
    for (var i = 0;i < fir.length;i++){
     if (sec.indexOf(fir[i]) === -1){
       newArr.push(fir[i]);
     }
    
  }
}
  compareWithFirst(arr1,arr2);
  compareWithFirst(arr2,arr1);
  
   return newArr;
  
  //Same, same; but different.
 
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
