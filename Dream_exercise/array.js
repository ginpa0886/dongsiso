// 'use strict'

// Array😂😂

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);  //['🍎', '🍌']
console.log(fruits.length);  //2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);  //undefine
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits
// 첫번째 방법
const fruits = ['🍎','🍌'];
for( let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// 두번째 방법 -> for of 를 사용하는 방법
for(let fruit of fruits){
    console.log(fruit);
}

// 세번째 방법 forEach
fruits.forEach(function(fruit, index){
    console.log(fruit, index);
})

// fruits.forEach((fruit) => console.log(fruit));

// 4. addition, deletion. copy
// push : add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); // ['🍎', '🍌', '🍓', '🍑']

// pop : remove and item from the end
fruits.pop();
fruits.pop();
console.log(fruits); //['🍎', '🍌']

// 뒤에서 부터 지워짐

// unshift : add an item to the beginnig
fruits.unshift('🥑', '🍏');
console.log(fruits);  //['🥑', '🍏', '🍎', '🍌']

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits); //["🍏", "🍎", "🍌"]

// note!! shift, unshift are slower than pop, push
// 뒤에서만 하는 것은 가장 뒤에 있는 배열공간만 쓰면되는데
// 앞에서 부터 하면 모든 데이터를 하나씩 밀어내야함

// splice : remove an item by index position
// 삽입과 
fruits.push('🍉','🍍');
console.log(fruits); //["🍏", "🍎", "🍌", "🍉", "🍍"]
// fruits.splice(1); // splice(몇번째 부터, 몇개를)
// console.log(fruits); ["🍏"]
// fruits.splice(1,1);
// console.log(fruits); //["🍏", "🍌", "🍉", "🍍"]
fruits.splice(1, 1, '🍒', '🥦');
console.log(fruits); //["🍏", "🍒", "🥦", "🍌", "🍉", "🍍"]


// combine two arrays
const fruits2 = ['🍄', '🧅'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //["🍏", "🍒", "🥦", "🍌", "🍉", "🍍", "🍄", "🧅"]

// 5. Searching
// index : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒')); // 1 -> 몇번째의 배열인지를 알려주는것
console.log(fruits.indexOf('🍉')); // 4 -> 4배열에 있음
// ['🍏', '🍒', '🥦', '🍌', '🍉', '🍍'] -기준
//includes -bool값
console.log(fruits.includes('🍉')); //true -> 배열에 값이 있는지를 확인해주는 기능
console.log(fruits.indexOf('🍗')); // -1 -> 배열에 없는 값을 물어보면 negative값을 줌

// lastIndexOf
console.clear();
fruits.push('🍏')
console.log(fruits.indexOf('🍏'));  // 0 번째라고 나옴 -> 제일 처음부터 찾음
console.log(fruits.lastIndexOf('🍏')); //6이라고 나옴 -> 뒤에서부터 찾음

//Quiz
