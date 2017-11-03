---
layout  :
title   : Explaining the output of the getFullName() function.
date    : 2017-11-03
---

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

-   If I console.log the variable **name** the output will be Vitalik Buterin, because the it is the value that is stored in **name**.

-   If I console.log the variable **obj** the output will be everything that is in the object (every key and its value).

-   If I console.log(**obj.name**) the output will be the value of the key **name** which is Satoshi Nakamoto, so the opens way out for the value that is kept.

-   If I console.log(**obj.prop.name**) the output will be the value of the key **name** in **prop** which is Adam Back, because it is the value contained by **name**.

-   If I console.log(obj.prop.getFullName()) the output will be Adam Back because **this.** represent the parent of the function which is **prop**, and **name** which containes 'Adam Back' is scoped within the object **prop**, therefore getFullName takes the **name** in **prop** the is the same as **obj.prop.name**.