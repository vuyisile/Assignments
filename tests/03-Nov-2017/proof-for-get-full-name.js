var name = {name:'Vitalik Buterin'};
var obj={
    name: 'Satoshi Nakamoto',
    prop:{
        name:'Adam Back',
        getFullName:function(name){
            return this.name;
        }
    }
};




console.log(obj.prop.getFullName());
var fullName = obj.prop.getFullName;
console.log();