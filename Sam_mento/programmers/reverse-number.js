

const n = 12345;

function solution(n){
  let answer = n + "";
  
    answer = answer.split('').reverse();
    for(let i = 0; i < answer.length; i++){
      answer[i] = Number(answer[i]);
    }
  return answer;
}

console.log(solution(n));