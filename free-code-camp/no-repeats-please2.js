function permute(a, n = a.length) {
    var c = [];
    var result = [];
    for (var i = 0; i < n; i++) {
        c[i] = 0;
    }
    result.push(a);
    var i = 0;
    while (i < n) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                var split = a.split('');
                const temp0 = a[0];
                const tempi = a[i];
                split[0] = tempi;
                split[i] = temp0;
                var a = split.join("");
            } else {
                var split = a.split('');
                const temp0 = a[c[i]];
                const tempi = a[i];
                split[c[i]] = tempi;
                split[i] = temp0;
                var a = split.join("");
            }
            result.push(a);
            c[i] += 1
            i = 0

        } else {
            c[i] = 0
            i += 1
        }
    }
    return result;
}

function permAlone(str) {
    a = str;
    var permArray = permute(a);
    permArray = permArray.filter(function (pattern) {
        for (var i = 0; i <= pattern.length - 1; i++) {
            if (pattern[i] === pattern[i + 1]) {
                return false;
            }
        }

        return true;
    });

    return permArray.length;
}

console.log(permAlone("aab"));
console.log(permAlone("zzzdd"));
console.log(permAlone("abfcdef"));
