
// function getLessThanNum(arr, num) {
//     var getLess = function (val) {
//         return val < num;
//     }
//     return arr.filter(getLess);
// }

// console.log(getLessThanNum(12))

var list = [1, 2, 3, 4, 6, 8, 9, 20, 15, 18, 12]

function contain(num) {
            this.num = num;
            this.list = list;
        }

contain.prototype.smaller = function () {
    var less = [];
            for(var i in list){
                if(this.num > list[i]){
                    less.push(list[i]);
                }
            }
            return less
        }


var result1= new contain(12);
var result2= new contain(7);

console.log(result1.smaller());
console.log(result2.smaller());
