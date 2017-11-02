// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
// Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
// because it contains the property and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
 var arr = [];
  var srcKeys = Object.keys(source);
  var srcVals = source[srcKeys];
  
  var findFalsy = function(obj){
    for (var i in srcKeys){
     if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys] !== srcVals){
       return false;
     }
    }
    return true;
  };
  
   arr = collection.filter(findFalsy);
 return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }))
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))


// result example: 
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
// should return [{ first: "Tybalt", last: "Capulet" }]. 