function delVowels(str) {
  
  var result = [];

  
    for (var i in str) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        result.push('');

      } else {
        result.push(str[i]);
      }
     
    }
     return result.join('');


}

console.log(delVowels("Sorry King Hurricane")); 
