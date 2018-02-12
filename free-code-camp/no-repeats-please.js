function permute(str) {
    var test = [];
    var permutated = [];
    var current = [];
    var strNum = "";
    var finalPerm = [];

    //replacing each element in the string with their indexes (example: 'abc' to 012)
    for (var index = 0; index <= str.length - 1; index++) {
        strNum += index;
    }

    //the first permutation
    for (var i = 0; i < strNum.length; i++) {
        var firstVal = strNum[i] + strNum.replace(strNum.charAt(i), "");
        current.push(firstVal);

    }
    //the second permutation
    current.forEach(function (element) {
        for (var x = 0; x < element.length; x++) {
            var secondVal = element[x] + element.replace(element.charAt(x), "");
            test.push(secondVal);
        }
    });
    //the third permutation
    test.forEach(function (setting) {
        for (var t = 0; t < setting.length; t++) {
            var pi = setting[t] + setting.replace(setting.charAt(t), "");
            permutated.push(pi + 'doNotDelete!');
        }
    });
    var perm =permutated;

    var result = [];
    perm.forEach(function (permVal) {
        for (var n in permVal) {
            finalPerm += str[parseInt(permVal[n])];
        }
    });
    var finalPerm = finalPerm.split('undefined');

    //Excluding unwanted things
    for (var v in finalPerm) {
        if (finalPerm[v].length === str.length) {
            result.push(finalPerm[v]);
        }
    }
    return result;

}

//function changeIndexToItsChar(){};


function removeDuplicates(arr) {
    var noRepeats = [];
    arr.forEach(function (element) {
        if (noRepeats.indexOf(element) === -1) {
            noRepeats.push(element);
        }
    });
    return noRepeats;
}

function permAlone(str) {
    permArray = permute(str);
    permArray = permArray.filter(function (pattern) {

        for (var p = 0; p <= pattern.length - 1; p++) {
            if (pattern[p] === pattern[p + 1]) {
                return false;
            }
        }

        return true;
    });

    return ' ' + '\n' + ('Length: ' + permArray.length + "\n" + "permutations: " + permArray);
}

console.log(permAlone("str"))
console.log(permAlone("zzbb"))
console.log(permAlone("jjjkk"))
console.log(permAlone("abcdefa"))

