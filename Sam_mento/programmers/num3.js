let arr = [1,5,2,6,3,7,4];
let num = [[2,5,3], [4,4,1], [1,7,3]];

function solution(arr, num){

    let answer = [];
    for(let i = 0; i<num.length; i++){
        for(let h = 0; h<num.length; h++){
            answer[i] = arr.slice(num[i][0]-1, num[i][1]);
            answer[i].sort((a ,b) => a-b);
        }
    }
    for(let i = 0; i<num.length; i++){
        answer[i] = answer[i][num[i][2]-1];
    }






    return answer;
}

console.log(solution(arr, num));