function isIntGreaterThanZero(input){
    if(typeof input === 'string'){
        return "None";
    }else if(typeof input === 'number' && input > 0){
        return "And";
    }else{
        return "Or";
    }
    
}

console.log(isIntGreaterThanZero(1));
console.log(isIntGreaterThanZero(-1));
console.log(isIntGreaterThanZero('e'));