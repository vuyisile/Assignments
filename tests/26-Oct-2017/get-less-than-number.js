function getLessThanNum(arr, num) {
    var getLess = function (val) {
        return val < num;
    }
    return arr.filter(getLess);
}

console.log(getLessThanNum([1, 2, 3, 4, 6, 8, 9, 20, 15, 18, 12], 12))
