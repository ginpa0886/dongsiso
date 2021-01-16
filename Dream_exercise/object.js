'use strict'

// 1. Class decalration
class Person{
  //constructor
  constructor(name, age){
    //fields
    this.name = name;
    this.age = age;
  } 

  //method
  speak(){
    console.log(`${this.name}: hello!`);
  }
}


const dongwon = new Person('dongwon', 20)
console.log(dongwon.name);
console.log(dongwon.age);
dongwon.speak();

// 2. Getter and setters
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}