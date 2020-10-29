
const arr = [1,1,3,3,0,0,1,1];


// function checkNumbers(arr){
//     const answer = new Set(arr);
//     console.log(answer);
// }

// checkNumbers(arr);

// 프로그래머스 2-1번 숙제
function mySolution(arr)
{
    const answer = [];
    for( let i = 0; i<arr.length; i++){
        let num = arr[i];
        if(i === 0){
            answer.push(num);
        }
        else if(arr[i-1] !== num){
            answer.push(num);
        }
    }
    return answer;
}

console.log(mySolution(arr));

//---------------------------------------------------
////진행중인 2번
// const arr = ["sun", "bed","car"];

// function solution(arr, n){
//     const answer = [];
//     const dong = [];
//     let num =0;
//     for( let i = 0; i < arr.length; i++){
//         for( let h = n; n < arr.length; n++){
//             num += arr[i].charAt(n-1);
//         }
//         answer[i] = num;
//     }






//     return answer;
// }

// console.log(solution(arr, 2));


//--------------------------------------------------------
//프로 그래머스 3번
function subak(n){
    let answer = '';
    for(let i= 0; i < n; i++){
        if(i % 2 == 0){
            answer += '수';
        }else{
            answer += '박';
        }
    }
    return answer;
}

console.log(subak(9));