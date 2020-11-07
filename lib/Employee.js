// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;

// var dog={
//     name:"wolfy",
//     haircolor:"brown"
// }

// var cat={
//     name:"meow",
//     haircolor:"black"
// }
// class Animal{
//     constructor(name,haircolor){
//         this.name=name
//         this.haircolor=haircolor
//     }
//     getName(){
//         return this.name
//     }
//     getHaircolor(){
//         return this.haircolor
//     }
// }

// var dog=new Animal("wolfy","brown")
// console.log(dog.getName())
// var cat= new Animal("Meow","black")
// console.log(cat.getHaircolor())

