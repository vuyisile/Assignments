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

console.log(name)
console.log(obj)
console.log(obj.name)
console.log(obj.prop.name)
console.log(obj.prop.getFullName())