


const phnoe_number = "01033334444";

function solution(phone_number) {
  let answer = phone_number.split('');
  console.log(answer)
  const answers = [];
  for(let i = 0; i < answer.length; i++){
      if(i + 4 >= answer.length){
          answers.push(answer[i]);
      }else{
          answers.push('*');
      }
  }
  
  return answers.join('');
}
console.log(solution(phnoe_number));


function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));