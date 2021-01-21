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
// console.log(dongwon);
// console.log(dongwon.name);
// console.log(dongwon.age);
// dongwon.speak();

// 2. Getter and setters
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
		// if(value < 0){
		// 	throw Error('age can not be negative');
		// }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
// console.log(user1);
// console.log(user1.age);


// 3. Fields (public, private)
class Experiment {
  publicFields = 2;
  #privateField = 0;
}
const experiment = new Experiment();
// console.log(experiment.publicFields);
// console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const aritcle2 = new Article(2);
// console.log(article1.publisher);
// console.log(aritcle2.publisher);
// console.log(Article.publisher);


// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('∆');
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
const trinagle = new Triangle()
// console.log(rectangle);
// trinagle.draw()
// rectangle.draw();


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(trinagle instanceof Rectangle);
console.log(trinagle instanceof Triangle);
console.log(trinagle instanceof Shape);
console.log(trinagle instanceof Object);