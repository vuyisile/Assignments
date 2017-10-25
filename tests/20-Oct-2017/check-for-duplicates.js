 function checkForDuplicates(arr) {
            var arr = Array.from(arguments);
            var sorted = arr.sort(function (a, z) {
                return a - z;
            });
            var results = [];
            for (var i in sorted) {
                for (var n = 1; n < sorted.length; n++) {
                    var iPlus1= i++;
                    if (sorted[n] === sorted[iPlus1]) {
                        results.push(sorted[n] === sorted[i]);
                        return true;
                    }
                }
               
                return false;
            }
            
        }
        console.log(checkForDuplicates(1, 2, 3, 4, 5)) // false

        console.log(checkForDuplicates("2", "1", "2", "3","0")) // true
        
        console.log(checkForDuplicates("1", "2", "3", "4", "5")) // false      
       
         console.log(checkForDuplicates(1, 2, 3, 4, 3)) // true