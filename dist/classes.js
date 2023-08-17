"use strict";
// class User{
//     readonly email:string// public by default
//    private name:string
//    //private can also be written as #name as in js it is written that way
//     constructor(email:string,name:string){
//       this.email=email;
//       this.name=name;
//     }
// }
class User {
    //this is mnore professional way than above bcs of syntax
    //PROTECTED access in same class and also any class
    //which inherits this class
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // in this syntax we dont have to write this.email etc
    }
    get getemail() {
        return this.email;
    }
    //setters should not have any return type mentioned
    //*INTERVIEW  QUESTION above*/
    set newfun(email) {
        console.log("new");
    }
}
//inheritance
class subClass extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}
const aman = new User("email", "strong");
