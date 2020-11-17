

const n = 118372;

function happy(n){
  let answer = String(n);
  let dong = [];
  for(let i =0; i < answer.length; i++){
    dong.push(answer[i]);
  }

  return Number(dong.sort().reverse().join(''));
}

console.log(happy(n));

function swag(n){
  const num1 = n + "";
  const numArr = num1
    .split("")
    .sort()
    .reverse()
    .join("");

  return +numArr;
}

console.log(swag(n));