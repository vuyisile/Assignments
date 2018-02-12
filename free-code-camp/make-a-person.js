var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var firstName ='';
    var lastName = '';
    var currentNames = function(names){
           names = names.split(" ");
           firstName = names[0];
           lastName = names[1];
      return firstName,lastName;
    } ; 
 
    currentNames(firstAndLast);
  
    this.getFullName = function(namesInFull) {
      namesInFull = firstName+ ' ' + lastName;
      return namesInFull;
    };
    this.getFirstName = function(){
      return firstName;
    };
    this.getLastName = function(){
      return lastName;
    };
    this.setFirstName = function(first){
        firstName = first;
        return firstName;
       };
    this.setLastName = function(last){
      lastName = last;
      return lastName;
     };
    this.setFullName = function(fullNames){
      
      return currentNames(fullNames);
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Person("Mark Nan"));
console.log(Person("Vince Rassels"))
