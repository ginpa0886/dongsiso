// 'use strict'
// // console.log('my' + 'cat');
// // console.log('1' + 2);
// // console.log(`string literals: 
// // .....
// // 1 + 2 = ${1 + 2}`);

// // console.log("ellie\'s \n \tbook");

// // //2. numeric operators

// // console.log(1 + 1); //add
// // console.log(1 - 1); // 빼기
// // console.log(5 / 2); //나누기(실수형으로 출력됨)
// // console.log(3.3 * 2); //곱하기
// // console.log(5 % 2); //나눈 후 나머지(몫말고)->여기선 값이 1나오겠죠?
// // console.log(2 ** 3); // 2의 3승을 표시한 거임(알아서 이해)

// // 3. 증감연사자
// let counter = 2;
// const preIncrement = ++ counter; // 이 초기화가 되기 전에 1이 플러스됨
// console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //여기서는 
// const postIncrement = counter++; // 이 초기화가 된후에 1이 플러스됨
// console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// //preIncrement: 3, counter: 3
// //postIncrement: 3, counter: 4 이렇게 출력 되겠죠~?

// //4. assignment operators
// // x += 1; 이런거...

// //logical operators; ||(or), &&(and), !(not)

// //||(or), finds the first truthy value
// const value1 = false;
// const value2 = 4 < 2;
// console.log(`or: ${value || value2 || check()}`);
// // 여기서 순차적으로 값을 확인해서 true가 나오면 뒤에 있는 것들은 시작되지 않음,
// // 그래서 가장 무거운 연산자나 함수를 뒤에 두어서 가벼운 값들은 빠르게 비교할 수 있게함


// // &&(and), finds the first falsy value
// console.log(`and: ${value || value2 || check()}`);
// //false가 발견되는 시점 뒤로는 실행이 안됨
// //and 연산자를 굳이 풀어쓰면 이런거 같음
// //if(value != null){
// //    value의 값을 확인함
// //}


// //null 값은 false임


// function check(){
//     for(let i =0; i< 10; i++){
//         console.log('*');
//     }
//     return true;
// }
// 


//7.Equality
// const stringFive = '5';
// const numberFive = 5;
// //js에서는 문자열 안에 있는 값을 대충 떠봐서 서로 비교해줘서 문자열 값과 숫자값을 =를 2개 사용하면 그냥 비교가능
// console.log(stringFive == numberFive);  //true
// console.log(stringFive != numberFive);  //false


// //strict equality 엄격한 검사
// console.log(stringfive === numberFive); //false (엄격한 검사로 이렇게 진행됨)
// console.log(stringfive !== numberFive);  //true


// //object equality by reference
// const ellie1 = {name: 'ellie'}; //ref1(가명) 이란 값을 갖음(레퍼런스값)
// const ellie2 = {name: 'ellie'}; //ref2(가명) 이란 값을 가질꺼임
// const ellie3 = ellie1; //ref 값을 그대로 가져오게 됨
// console.log(ellie1 == ellie2); //false ref값을 비교해보니 다름
// console.log(ellie1 === ellie2); //true ref안에 있는 값을 비교하는 연산자로 작용함
// console.log(ellie1 === ellie3); //true

// //실험 equality - puzzler
// console.log(0 == false); //true
// console.log(0 === false); //false type형을 비교하므로
// console.log('' == false); //true
// console.log('' === false); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// //8.if문
// const name = 'coler';
// if(name === ' ellie'){
//     console.log('Welcome, Ellie!');
// }else if (name === 'coler'){
//     console.log('You are amazing coder');
// }else{
//     console.log('unkwnon');
// }

// //9.Ternary operator: ?
// //문법은 condition ? valuse1 : value2;
// console.log(name === 'ellie' ? 'yes' : 'no'); //여기서는 no가 나오겠죠?

// //10. switch statement
// const browser = 'IE';
// switch (browser){
//     case 'IE':
//         console.log('go away!')
//         break;
//     case 'Chrome':
//         console.log('Love you!');
//         break;
//     case 'Firefox':
//     case 'EX':
//         console.log('hahaha!');
//         break;
//     default:
//         console.log('same all!');
//         break;
// }
// //여러번의 if문이 겹쳐있는거와 마찬가지의 구조


// //11. Loops
// let i =3;
// while (i>0){
//     console.log(`while: ${i}`);
//     i--;
// }

// do{
//     console.log(`do while: ${i}`);
//     i--;
// }while (i>0);
// //선출력후 while문으로 검사함

// for (i =3; i>0; i--){
//     console.log(`for: ${i}`);
// }
//지역변수도 가능, 이중 for문 가능

//문제 1번 0~10숫자를 짝수만 출력
for(let i=0; i<=10; i++){
    if(i%2 ==0){
        console.log(i);
    }
}

//
for(let i = 0; i<1; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

//문제 2번
for(let i = 0; i<=10; i++){
    if(i === 8){
        break;
    }
    console.log(i);
}
for(let i = 0; i<11; i++){
    if(i >0){
        break;
    }
    console.log(`q2, ${i}`);
}