

// html에 div로 만들 수 있게 하는 것
const body = document.body;
const word = document.createElement('div');
word.textContent = '정동원';
document.body.append(word);
const form = document.createElement('form')
document.body.append(form);
const inputTap = document.createElement('input');
form.append(inputTap);
const buttonTap = document.createElement('button');
buttonTap.textContent = '입력!';
form.append(buttonTap);
const resultTap = document.createElement('div');
document.body.append(resultTap);

// const bill = document.getElementsByClassName('dong');
// bill.textContent = 'dongwonjeong'
form.addEventListener('submit', function(event){
  event.preventDefault();
  if(word.textContent[word.textContent.length - 1] === inputTap.value[0]){
    resultTap.textContent = '딩동댕';
    word.textContent = inputTap.value;
    inputTap.value = '';

    //입력창에 다시 포커스 되게 만드는 것
    inputTap.focus();
  }else{
    resultTap.textContent = '땡!';
    inputTap.value = '';
    inputTap.focus();
  }
})

// buttonTap.addEventListener('click', function(){
//   if(word.textContent[word.textContent.length - 1] === inputTap.value[0]){
//     resultTap.textContent = '딩동댕';
//     word.textContent = inputTap.value;
//     inputTap.value = '';

//     //입력창에 다시 포커스 되게 만드는 것
//     inputTap.focus();
//   }else{
//     resultTap.textContent = '땡!';
//     inputTap.value = '';
//     inputTap.focus();
//   }
// }) // 콜백함수



// let dong = '랜덤말잇기';
// let a = 3;

// while (a > 0){
//     let ran = parseInt(Math.random()*dong.length);
//     alert(`'${dong}'의 ${ran+1}번째 글자로!`)
//     let answer = prompt(dong);
    
//     if(answer.length > 5 || answer.includes(' ') || answer.length === 1){
//       alert(`틀렸습니다! 목숨이 ${a-1}개 남았습니다`);    
//         a--;
//     }
//     else if(dong[ran] === answer[0]){
//         dong = answer;
//     }else if(a === 1){
//         alert(`Game Over`);
//     }else{
//         alert(`틀렸습니다! 목숨이 ${a-1}개 남았습니다`);    
//         a--;
//     }
// }
