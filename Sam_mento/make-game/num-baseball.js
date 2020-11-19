
const body = document.body;

const ranNum =[];
const numArray = [];
let a = 0;
function makeArray(ranNum, numArray){
  ranNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  numArray = [];
  a = 10;

  for(let i = 0; i < 4; i++){
    // splice로 자르는 만큼 랜덤한 숫자의 범위를 줄여야 하므로, (10 - i)를 해줌
    // splice는 원본 배열을 바꿈
    const num = ranNum.splice(Math.floor((Math.random() * (10 - i))) , 1)[0];
    // const num = ranNum.pop();
    numArray.push(num);
  }
}
makeArray();


console.log(numArray);

const result = document.createElement('h1');
result.textContent = '';
body.append(result);
const form = document.createElement('form');
document.body.append(form)

const input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
form.append(input);

const button = document.createElement('button');
button.textContent = `입력`;
form.append(button);

const bR = document.createElement('br');



form.addEventListener('submit', function(event){
  event.preventDefault();
  const answer = input.value;
  // console.log(answer, numArray.join(''), answer === numArray.join(''));
  
  if(answer === numArray.join('')){
    result.textContent = `홈런! ${a-9}회 만에 푸셨습니다! 
                          새 게임을 시작하겠습니다.`;
    input.value = '';
    input.focus();
    makeArray();
  }else{
    const answerArray = answer.split('');
    let strike = 0;
    let ball = 0;
    console.log(answerArray, numArray);
    for(let i = 0; i < numArray.length; i++){
      if(Number(answerArray[i]) === numArray[i]){
        console.log(i);
        strike++;
      }else if(numArray.includes(Number(answerArray[i])) === true){
        ball++;
      }
    }
    a--;
    result.textContent = `${answer} // Strike = ${strike}, Ball = ${ball} 목숨은 ${a}개 남았습니다.`;
    input.value = '';
    input.focus();
    if(a === 0){
      result.textContent = `Game Over 
                            새 게임을 시작하겠습니다.`
      makeArray();
    }
  }
});