

String.prototype.duplify = function(num){
        var newArr = [];
        for(var i = num+1; i > this.length;i--){
            newArr+=this;
        }
        return newArr;
    }


 console.log("c".duplify(5))