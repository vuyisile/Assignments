---
layout  :
title   : Explaining the output of the getFullName() function.
date    : 2017-11-03
---

# Code:

var name = 'Vitalik Buterin';
var obj={
    name: 'Satoshi Nakamoto',
    prop:{
        name:'Adam Back'
        getFullName:function(){
            return this.name;
        }
    }
};

var fullName = obj.prop.getFullName();

# Result:

console.log(**obj.prop.getFullName()**);
console.log(fullName);

# Explanation:


-   If I console.log(**obj.prop.getFullName()**) the output will be Adam Back because **this.** represent the parent of the function which is **prop**, and **name** which containes 'Adam Back' is scoped within the object **prop**, therefore getFullName takes the **name** in **prop** the is the same as **obj.prop.name**.

-   If I console.log(**fullName**) the output will still be 'Adam Back' because it contains **obj.prop.getFullName()**, so **fullName** is just a different representation of **obj.prop.getFullName()**.