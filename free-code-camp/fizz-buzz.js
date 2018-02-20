function fizzBuzz(num) {
    // var res = [];
    // var n = '';
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log('fizz')
        } else if (i % 3 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }

}

fizzBuzz(10);