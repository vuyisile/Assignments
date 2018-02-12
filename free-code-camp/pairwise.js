function pairwise(arr, arg) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        for (var n = i+1; n <= arr.length; n++) {
            if (arr[i] + arr[n] === arg) {
                sum+=i;
                sum+=n;
                delete arr[i];
                delete arr[n];
            }
        }
    
}
    
    return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));// should return 6.
console.log(pairwise([1, 3, 2, 4], 4));// should return 1.
console.log(pairwise([1, 1, 1], 2)); //should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // should return 10.
console.log(pairwise([], 100)); // should return 0.
