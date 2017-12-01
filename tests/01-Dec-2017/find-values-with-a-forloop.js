function findValues(array, num, toFind) {
    var results = [];
    for (var i in array) {
        if (toFind.indexOf('LessThan') !== -1 && array[i] < num) {
            results.push(array[i]);
        } else if (toFind.indexOf('GreaterOrEqual') !== -1 && array[i] >= num) {
            results.push(array[i]);
            
        }

    }
    return results;
}

console.log(`Greater Or Equals \n [${findValues([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual")}] \n \n`);

console.log(`Less Than \n [${findValues([1, 2, 3, 4, 5, 6, 7], 5, "LessThan")}] \n \n`);