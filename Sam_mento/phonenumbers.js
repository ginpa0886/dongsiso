let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right"

function solution(numbers){
let answer = "";
let num = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[11],[0],[12]];
let right = 0;
let left = 0;
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] === 1 || numbers[i] ===  4 || numbers[i] === 7){
        answer += 'L';
        left = i;
    }

    else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
        answer += 'R';
        right = i;
    }else{
        answer += 'M';
    }
}
  return answer;
}

console.log(solution(numbers));