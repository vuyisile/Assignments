---
Layout:
Title: What is the output of the following code? Explain your answer?
Date: 2017- 11-10
---

# Explanation

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);


The first function, fn will output 10 because "this.length" access length at a global scope, so when fu() is executed "this." searches for length in the window.


The obj.method(fn,1) will return 2 because when fn is executed in obj.method and the "arguments[0]()" gives us an object the arguments passed in obj.method, therefore in this case, "this.length" becomes arguments.length.