function dropElements(arr, func) {
    var len = arr.length;
    var n = 0;
    return arr;
}

console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n >= 3; }));
