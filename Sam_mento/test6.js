

const n = 6;
const times = [7, 10];

function howTime(n, times){
  let answer = 0;
  for(let i = 1; i < 100; i++){
    for(let h = 0; h < times.length; h++){
      if(i % times[h] === 0){
        n--;
      }
    }
    if(n === 0){
      answer = i;
      break;
    }
  }

  return answer;
}
console.log(howTime(n,times));