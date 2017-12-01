function encodeString(string) {
    var numAlpha = [];
    var count = 1;
    var strInArr = string.split('');
    for (var i = 0; i < strInArr.length; i++) {
        if (strInArr[i] === strInArr[i + 1]) {
            if (count+1 > count) {
                count++;
                numAlpha.push(count + strInArr[i]);
            }

        } else {
            count = 1;
            numAlpha.push(count + strInArr[i]);
        }


    }

    return numAlpha
}

console.log(encodeString("BOOKDASH"));

console.log(encodeString("BOOOKDAAASH"));