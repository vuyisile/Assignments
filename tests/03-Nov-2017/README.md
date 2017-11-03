### task 1.

What is the output of the following code and explain your answer in detain:

var name = 'Vitalik Butterin'; 
var obj = {
    name:'Satoshi Nakamoto';
    prop:{
        name:'Adam Back';
        getFullName:function(){
            return this.name;
        }
    }
};

### task 2.
Write a *duplify* function on the string object. The function takes a number that specifies how many times the string has to be duplicated and returns the string repeated the number of times specified.
example:
console.log("Cryto".duplify(4));
output: CrytoCrytoCrytoCryto.