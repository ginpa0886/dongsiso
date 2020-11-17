
const arr = [2, 2, 2, 3];

function solution(arr) {

  let answer = arr.sort((a,b) => a - b).reverse();
  if(answer[answer.length - 1] === answer[answer.length - 2]){
    console.log(`실행됨`);
    answer = answer.filter(n => n !== answer[answer.length - 1]);
  }else{
    answer.pop();
  }
  
  if(answer.length === 0){
    answer.push(-1);
  }

  return answer;
}





function solution(arr){
  let min = 0;
  let dong = arr;
  for(let i = 0; i < dong.length; i++){
    for(let h = i; h < dong.length; h++){
      if(dong[i] > dong[h]){
        
        min = dong[i];
        dong[i] = dong[h];
        dong[h] = min;
      }
    }
  }
  
  // dong = dong.reverse();
  // dong.pop();


  return answer;
}
console.log(solution(arr));
