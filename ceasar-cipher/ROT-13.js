function rot13(str) { // LBH QVQ VG!
  var a_z = "abcdefghijklmnopqrstuvwxyz";
  var alpha = a_z.toUpperCase();
  var a = 13;
 for (var i = 0; i < str.length;i++){
   var x = str.indexOf(str[i]);
   var y = alpha.indexOf(str[x]);
   
   if (str[i] >= alpha[a]){    
     str = str.replace(str[i],alpha[y-a]);
   }
   
   else if (str[i+y] >= alpha[y]){    
     str = str.replace(str[i],alpha[y+a]);
   }
    else if (alpha[y]>str[i-a]){
      str = str.replace(str[i],alpha[y+a]);
    }
 }
  return str;
 }


// Change the inputs below to test
rot13("SERR PBQR PNZC");

function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  for ( var i = 0; i < str.length; i++ ) {
      char = str.charCodeAt(i);
      if ( char < 65 || char > 90 ) {
          char = char;
      }
      else {
        char += 13;
        if ( char > 90 ) {
          char = ( char - 90 ) + 64;
        }
      }
    newStr += String.fromCharCode(char);
  }
  return newStr;
}


