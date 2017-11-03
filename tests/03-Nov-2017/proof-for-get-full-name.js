var name = 'Vitalik Buterin';
var obj={
    name: 'Satoshi Nakamoto',
    prop:{
        name:'Adam Back',
        getFullName:function(){
            return this.name;
        }
    }
};

var fullName = obj.prop.getFullName();


console.log(obj.prop.getFullName())
console.log(fullName)