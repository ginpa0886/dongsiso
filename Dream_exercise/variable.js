'use strict'


// const count = 17;
// const size = 17.1;
// console.log(`value: ${count}, type : ${typeof count}`);
// console.log(`value: ${size}, type : ${typeof size}`);


// const infinity = 1/0;
// console.log(infinity);

// const char = 'c';
// const brendan = 'brendan';
// const greeting = 'hello' + brendan;
// console.log(`value: ${greeting}, type: ${typeof greeting}`);
// const helloBob = `hi ${brendan}!`; //template literals (String)
// console.log(`valuse: ${helloBob} , type: ${typeof helloBob}`);
// console.log('valuse: ' + helloBob + 'type: ' + typeof helloBob);

// //boolean
// const canRead = true;
// const test = 3<1; //false
// console.log(`value: ${canRead}, type: ${typeof canRead}`);
// console.log(`value: ${test}, type: ${typeof test}`);

// //null
// // let nothing = null;
// // console.logconsole.log(`value: ${nothing}, type: ${typeof nothing}`);
 
// //undefined
// // let x;
// // console.logconsole.log(`value: ${x}, type: ${typeof x}`);

// //symbol, create unique identifiers for objects
// //이건 말그대로 똑같은 것일때??-> 변수도 같아야하는건가?
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1 === symbol2);


// // string 값이 같은 심볼을 만들때
// const gsymbol1 = Symbol.for('id');
// const gsymbol2 = Symbol.for('id');
// console.log(gsymbol1 === gsymbol2);

//Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h가 출력됨
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);


//object, real-lif object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;