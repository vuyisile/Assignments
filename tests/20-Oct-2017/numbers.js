function numbers(arr) {
            arr = Array.from(arguments);
            var result = [];
            for (var i in arr) {
                if (typeof (arr[i]) === "string") {
                         return false;
            
                }
                    
                
            }

            return true;
        }
        console.log(numbers(1, 4, 3, 2, 5)); // true

        console.log(numbers(1, "a", 3));// false

        console.log(numbers(1, 2, NaN));// true