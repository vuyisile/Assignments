function calculateNumOfVowels(str){
    var a = [],e = [],i = [],o = [],u = [];
    var results = "";
    for (var element of str){
        if(element === "a"){
            a+=element;
        }
        else if(element === "e"){
            e += element;
        }
        else if(element === "i"){
            i += element;
        }
        else if(element === "o"){
            o += element;
        }
        else if(element === "u"){
            u += element;
        }
    }
    results = `a:${a.length}, e:${e.length}, i:${i.length}, o:${o.length}, u:${u.length}`;
    return results;
}


console.log(calculateNumOfVowels("kodwa Gatcheni, ubuyaguphi ngal'sikhathi"))