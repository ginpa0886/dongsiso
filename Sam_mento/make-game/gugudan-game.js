
let number1 = Math.floor(Math.random() * 9) + 1;
let number2 = Math.floor(Math.random() * 9) + 1;

const body = document.body;
const word = document.createElement('div');
word.textContent = String(number1) + '곱하기' + String(number2) + '는?';
document.body.append(word);
const form = document.createElement('form');
document.body.append(form);
const input = document.createElement('input');
// input.type = 'Number';
form.append(input);
const button = document.createElement('button');
button.textContent = '입력';
form.append(button);

const result = document.createElement('div');
document.body.append(result);
let a = 3;
let numResult = number1 * number2;

form.addEventListener('submit', function (event){
  event.preventDefault();
  if(Number(input.value) === number1*number2){
    result.textContent = '정답입니다!';
    number1 = Math.floor(Math.random() * 9) + 1;
    number2 = Math.floor(Math.random() * 9) + 1;
    numResult = number1 * number2;
    word.textContent = `${number1} 곱하기  ${number2}는?`;
    input.value = '';
    input.focus();
  }else{
    result.textContent = '오답입니다!';
    a--;
    input.value = '';
    input.focus();
  }
})




// let a = 3;

// while(a > 0){
//     let num1 = Math.floor(Math.random() * 9) + 1;
//     let num2 = Math.floor(Math.random() * 9) + 1;
//     let result = num1 * num2;
//     console.log(result);
//     let answer = prompt(`${num1} 곱하기 ${num2}는?`)

//     if(answer == result){
//         alert(`정답입니다!`);
//     }else{
//         alert(`오답입니다!`);
//         a--;
//     }
// }

