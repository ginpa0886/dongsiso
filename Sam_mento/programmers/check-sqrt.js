function solution(n) {
  let x = 0;
  for(let i = 1; i <= n/Math.sqrt(n) + 1; i++){
      if(Math.pow(i,2) === n){
          x = i;
          break;
      }
  } 
  return x === 0 ? -1: Math.pow((x+1), 2);
}