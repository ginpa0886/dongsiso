//kakao dat game

const dartResult = '10D#10T*10S*';

function dartGame(dartResult){
  let first = dartResult.split('')
  let answer = [];
  //숫자와 문자를 서로 구분
  let num = first.filter(n => /\d/.test(n) === true);
  let word = first.filter(n => /\d/.test(n) !== true);
  console.log(num);
  //문자를 숫자로
  for(let i = 0; i < num.length; i++){
    if(Number(num[i]) === 0 && num[i - 1] === 1){
      num[i - 1] += 9;
    }else{
      num[i] =Number(num[i]);
    }
  }
  
  num = num.filter(n => n !== '0');

  for(let i = 0; i < num.length + 1; i++){
    for(let h = 0; h < word.length; h++){
      if(word[h] === 'S'){
        answer.push(Math.pow(num[i], 1));
        word.shift();
        console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}111`);
        break;
      }else if(word[h] === 'D'){
        answer.push(Math.pow(num[i], 2));
        word.shift();
        console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}222`);
        break;
      }else if(word[h] === 'T'){
        answer.push(Math.pow(num[i], 3));
        word.shift();
        console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}333`);
        break;
      }else if(word[h] === '#'){
        answer[i-1] *= (-1);
        word.shift();
        h = -1;
        console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}444`);
      }else if(word[h] === '*'){
        if(i === 1){
          answer[0] *= 2;
          word.shift();
          h = -1;
          console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}555`);
        }else{
          answer[i-2] *= 2; 
          answer[i-1] *= 2;
          word.shift();
          h = -1;
          console.log(`answer = ${answer}, i = ${i}, h = ${h}, num[i] = ${num[i]} word = ${word}666`);
        }
      }
    }
  } 
  
  


  return answer[0] + answer[1] + answer[2];
}

console.log(dartGame(dartResult));