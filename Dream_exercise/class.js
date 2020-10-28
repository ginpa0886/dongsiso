'use strict';

//class : template;
//object : instance of a class

// 1.class 선언
class Person{
    //constructor(생성자)
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods(행동)
    speak(){
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);  //ellie
console.log(ellie.age);     //20
ellie.speak();      //ellie: hello

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    
    set age(value){
        if(value < 0){
            throw Error('age can not be negative');
        }
        this._age = value // < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', 20);  //실수로 -1을 넣는다면?
console.log(user1.age);

// 3. Fields (public, private)
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

// 4. static object에 상관없이 class에서 쓸수 있는것
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const artical1 = new Article(1);
const artical2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
console.log(artical1);

// 상속 & 다양성
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // method
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
    toString(){
        return `I'm base word`;
    }
}

class Rectangle extends Shape {} //class를 상속 받음
class Triangle extends Shape {
    getArea(){
        super.draw(); //부모의 값을 가져 오는 것
        return this.width * this.height /2;
    }
} //이런식으로 상속을 받으면서 부분 수정 가능

const rectangle = new Rectangle(20, 20, 'Blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); //원래 부터 있던 Object임