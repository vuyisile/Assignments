/*function isIsogram(str) {
    //...
    var keeper = [];
    str = str.toLowerCase().split("").sort();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            keeper.push(str[i]);
        }
    }
    keeper = keeper.join('');
    if (keeper.length > 0) {
        return false;
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));//, true 
console.log(isIsogram("isogram"));//, true );
console.log(isIsogram("aba"));//, false, "same chars may not be adjacent" 
console.log(isIsogram("moOse"));//, false, "same chars may not be same case" 
console.log(isIsogram("isIsogram"));//, false );
console.log(isIsogram(""));//, true, "an empty string is a valid isogram" */


/*function digital_root(n) {
    // ...
    var number = 0;
    n = n.toString().split('');

    for (var i in n) {
        number += parseInt(n[i]);
    }

    var number2 = 0;
    if (number > 9) {
        var n2 = number.toString().split('');

        for (var k in n2) {
            number2 += parseInt(n2[k]);
        }
        return number2;
    }

    return number;
}*/


/*function breakNum(n){
    var list = [];
    for (var i = 1; i < n;i++){
        list += i;
    }
    return list;
}

console.log(breakNum(10));*/


function sumFibs(num) {
    var curr = 1;
    var prev = 0;
    var arr = [];
    var final = 0;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            arr.push(curr);
        }
        curr += prev;
        prev = curr - prev;
    }
  for(var i in arr){
    final += arr[i];
  }

    return final;

}

sumFibs(4);
