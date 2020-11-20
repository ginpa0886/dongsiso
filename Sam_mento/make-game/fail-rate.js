function solution(n, stages) {
  const answer = [];
  const dong = [];
    // 1~n까지의 실패율을 answer 배열에 담음
    // 예외 처리로 스테이지에 도달한 사람이 없을 경우는 0을 할당
  for(let i = 1; i <= n; i++){
    if(stages.filter(n => n >= i).length === 0){
        // 스테이지에 도달한 사람이 없을 때
      answer.push(0);
    }else{
      answer.push(stages.filter(n => n === i).length / stages.filter(n => n >= i).length);
        //실패율 구하고 answer배열에 push
    }
  }
    // Math.max가 index가 작은 것을 반환하므로 이것으로 오름차순으로 정리 가능
  for(let i = 0; i < answer.length; i++){
    const won = answer.indexOf(Math.max(...answer));
    if(Math.max(...answer) === -1){
        // 모든 값들이 -1이 되면 break로 for문 탈출
      break;
    }
    dong.push(won + 1);
      // 그 index 값에 1을 더해주고 push
    answer[won] = -1;
      // 해당 index의 value를 -1로 바꿔줌
  }
  return dong;
}