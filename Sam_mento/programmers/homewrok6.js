function solution(arr, num) {
  const answer = [];
  const len = num.length;
  for(let i = 0; i < len; i++){
      for(let h = 0; h < len; h++){
          answer[i] = arr.slice(num[i][0] - 1, num[i][1]);
          answer[i].sort((a, b) => a - b);
      }
  }
  for(let i = 0; i < len; i++){
      answer[i] = answer[i][num[i][2] - 1];
  }
  return answer;
}