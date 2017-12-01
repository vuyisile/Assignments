function findValues(array, num, toFind) {
    if (toFind.indexOf('LessThan') !== -1) {
        return array.filter((val) => val < num);
    } else if (toFind.indexOf('GreaterOrEqual') !== -1) {
        return array.filter((val) => val >= num);
    }
}

console.log(`Greater Or Equals \n [${findValues([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual")}] \n \n`);

console.log(`Less Than \n [${findValues([1, 2, 3, 4, 5, 6, 7], 5, "LessThan")}] \n \n`);