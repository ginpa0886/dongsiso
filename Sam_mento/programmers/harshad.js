



const arr = 10;

function happy(arr){
  // 문자로 바꿔준뒤 배열로 만듬
  const answer = String(arr).split("");
  let num = 0;
  // 배열을 쫙 더해주고
  for(let i = 0; i < answer.length; i++){
    answer[i] = Number(answer[i]);
    num += answer[i];
  }
  // 나누어 떨어지는지 확인
  return arr % num === 0 ? true : false;
}

console.log(happy(arr));


function Harshad(n){
  // n + "" => 문자로 바꿔주는 것
  // split("") => 배열로 바꿔줄때 필요
  // reduce부분에서 +a +b를 해준것은 숫자화 시키는 것임
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}
