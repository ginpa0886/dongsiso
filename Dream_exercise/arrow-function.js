//함수(Fucntion) 선언
//function name(parma1, param2){} //->문법

function printHello(){
    console.log('Hello!');
}
printHello();


function log(message){
    console.log(message);
}
// log('Hello!!');

function chageName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
chageName(ellie);
console.log(ellie);

function showMesaage(message, from ='unknown'){ 
    console.log(`${message} by ${from}`);
} //undefine 값이 unknown으로 출력하게 됨
showMesaage('Hi!');
// 값이 할당되어 있지 않으면

//4. Rest parameters
// ... 을 파라미터 값 안에 두게 되면 배열로 받게 해줌
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));  //배열에서 배울 것
}
printAll('dream', 'coding', 'ellie');

// 5.Local scope
let globalMesage = 'global'; 
function printMessage(){
    let message = 'Hello';
    console.log(message); 
    console.log(globalMesage);
}
printMessage();
//내부에 있는 지역변수는 사용 불가

//6. Return a value
function sum(a, b){
    return a + b;  // 출력되는 값
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
function upgradeUser(user){
    if(user.point >10){
        //long upgrade logic...
    }
} //이런 것 보다

//이런게 좋음
function upgradeUser(user){
    if(user.point <=10){
        return; //값이 아닌 것들에 한하여 종료하게 만드는 것
    }
    //long upgrade logic...
}

// function expression
const print = function (){
    console.log('print');
}
print(); //함수처럼 됨, 즉 함수자체를 하나의 값으로 줄 수 잇음
// js에서는 호이스팅해줌(위에다 올려줌)

//CallBack function
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

//anonymous function
const printYes = function(){
    console.log('yes!');
}


//named function
const printNo = function print(){
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo)


//arrow function
const simplePrint = function (){
    console.log('simplePrint');
}

// 이게바로 arrow function 축약해주는 것
const simplePrint = () => console.log('simplePrint!');

//IIFE Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE')
})();
// 함수 선언과 동시에 바로 함수를 실행하는 것

//Quiz
let command = 'add';
let a = 66;
let b = 78;
function calculate(command, a, b){
    switch(command){
        case 'add':
            console.log(`a + b: ${a + b}`);
            break;
        case 'substract':
            console.log(`a + b: ${a - b}`);
            break;
        case 'divdie':
            console.log(`a + b: ${a / b}`);
            break;
        case 'multiply':
            console.log(`a + b: ${a * b}`);
            break;
        default:
            console.log(`a + b: ${a % b}`);
            break;
    }
}

calculate(command, a, b);

function calcu(command, a, b){
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divdie':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calcu('add', 2, 3));