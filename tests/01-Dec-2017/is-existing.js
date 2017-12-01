function isExisting(string, word) {
    if (string.indexOf(word) === -1) {
        return false;
    }
    return true;
}

console.log(isExisting("I was once a child", "child"));
console.log(isExisting("I was once a child", "kid"));