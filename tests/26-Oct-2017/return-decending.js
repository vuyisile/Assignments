function getDecendingOrder(){
    var arr = Array.from(arguments);
    var splited = arr.toString().split('').reverse(function(a,z){
        return z-a;
    }) ;
    

    return splited.join('');
}



console.log(getDecendingOrder(23345486))