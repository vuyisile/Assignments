function checkWord(board, word) {
    // ...
    var expectation ;
    var res = [];
    for (var arr of board) {
        for (var i = 0; i < word.length; i++) {
            var key = word[i];
            res.push(arr.filter((val) => val === key));
        }
    }

    // var string = res.join('');

    // if(string === word){
    //    expectation = true;
    // }else{
    //     expectation = false;
    // }
    return res;



}

console.log(checkWord([
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"]
], 'BOY'));

console.log(checkWord([
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"]
], 'EARA'));

console.log(checkWord([
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"]
], 'NAR'));