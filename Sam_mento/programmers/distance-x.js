
const x = 2;
const n = 5;

function solution(x, n) {
  let num = 0;
  let answer = [];
 for(let i = 1; i <= n; i ++){
      num += x;
      answer.push(num);
 }
  return answer;
}

console.log(solution(x,n));