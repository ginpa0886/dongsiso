

const n = 6;
const times = [7, 10];

function howTime(n, times){
  let answer = 0;
  let count = [];
  const num1 = Math.max(...times);
  const  num2 = Math.min(...times);
  console.log(num1);
  console.log(num2);
  
  while(n <= count){
    for(let i = num2; i <= num1; i++){
      for(let h = 0; h < times.length; h++){
        if(i % times[h] === 0){
          count.push(1);
        }
      }
    }
    n - count.length;
  }
    
  
    return count.length;
  }

console.log(howTime(n,times));




//// 1차 방안 => 시간이 너무 오래 걸림
// const n = 6;
// const times = [7, 10];

// function solution(n, times) {
//   let answer = 0;
//  const count = n;
//  const num2 = Math.min(...times);
//    for(let i = num2; i < num2*count; i++){
//      for(let h = 0; h < times.length; h++){
//        if(i % times[h] === 0){
//          n--;
//        }
//      }
//      if(n === 0){
//        answer = i;
//        break;
//      }
//    }
 
//    return answer;
//  }
// console.log(howTime(n,times));