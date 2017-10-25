function findLastElement(arr) {
    argArr = Array.from(arguments);

    if (argArr.length === 1) {
        var len1 = argArr[0].length - 1;
       return argArr[0][len1];
    }
    else {
        
        return argArr[argArr.length- 1]
    }
    
}
console.log(findLastElement(1, 2, 3, 4));
console.log(findLastElement([1, 2, 3, 4]));
console.log(findLastElement("xyz")); 