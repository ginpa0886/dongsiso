
const board = [[0,0,0,0,0],
                [0,0,1,0,3],
                [0,2,5,0,1],
                [4,2,4,4,2],
                [3,5,1,3,1]];

const moves = [1,5,3,5,1,2,1,4];

function solution(board, moves) {
  const burket = [];
  let count = 0;
  for(i = 0; i < moves.length; i++) {
      for(j = 0; j < board.length; j++) {
          if(board[j][moves[i] - 1] !== 0) {
            console.log(i, j);
              burket.push(board[j].splice(moves[i] - 1, 1, 0).join());
              break;
          }
      }
      if(burket[burket.length - 2] === burket[burket.length - 1]){
        burket.pop();
        burket.pop();
      }
  }
  console.log(board);
  console.log(moves);
  return burket;
}
console.log(solution(board, moves));