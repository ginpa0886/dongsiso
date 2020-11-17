let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[0,2,4,4,2],[0,5,1,3,1]];

const moves = [1,1,1,1,1,1,1,1,1,1];


function game(board, moves){
  let dong = board
  let answer = [];
  let count = 0;
  for(let i = 0; i < moves.length; i++){
    for(let h = 0; h < dong.length; h++){
      if(dong[h][moves[i]-1] != 0){
        answer.push(dong[h][moves[i]-1]);
        console.log(`h= ${h} 와 i = ${i}에서 값 = ${dong[h][moves[i]-1]}를 밀어 넣었다. 그리고 answer은 ${answer}이다`);
        dong[h][moves[i]-1] === new Array();
        dong[h][moves[i]-1] = 0;
        break;
      }
    }
    if(answer.length !== 0 && answer[answer.length-2] === answer[answer.length-1]){
      console.log(`${answer} 입니다`);
      answer.pop();
      answer.pop();
      count += 2;
      console.log(answer);
    }
  }
  console.log(dong);
  console.log(answer);
  return count;
}

console.log(game(board, moves));