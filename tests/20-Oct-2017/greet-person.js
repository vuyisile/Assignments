function Person(name, otherName) {
            this.name = name;
            this.otherName = otherName;

        }


        Person.prototype.greet = function () {

            return "Hi " + this.otherName + ", my name is " + this.name;
        }

        var greetPerson1 = new Person("John", "Frank");
        var greetPerson2 = new Person("Frank", "Mark");
        var greetPerson3 = new Person("Kim", "George");

        console.log(greetPerson1.greet())
        console.log(greetPerson2.greet())
        console.log(greetPerson3.greet())
