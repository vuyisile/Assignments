String.prototype.duplify = function(num){
        var newArr = [];
        for(var i = 0; i < num ;i++){
            newArr+=this;
        }
        return newArr;
    }


 console.log("Mark".duplify(5))