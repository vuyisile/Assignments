function makeTriangle(num){
    var a = [];
    var n = "#";
    var k = 0;
    while(k <= num){
        a.push(n);
        console.log(a.join(''));
        num--;
    }
    
    
}
makeTriangle(5);