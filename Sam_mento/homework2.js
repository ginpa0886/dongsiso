
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
////2번
function test(arr, n){
    arr.sort((a,b) =>{
        if(a[n] === b[n]){
            return a.localeCompare(b);
        }else{
            return a[n].localeCompare(b[n]);
        }
    } );
    return arr;
    
}
// const arr = ["abce", "abcd", "cdx"];

// function checkString(arr, n){
//     let answer = [];
//     let dong = [];
//     let length = arr.length;
//     for(let i = 0; i < length; i++){
//         // answer[i] = arr[i].charAt(n);
//         for(let h = 0; h < arr[i].length - n; h++){
//             if( h === 0 ){
//                 answer[i] = arr[i].charAt(n);
//                 dong[i] = arr[i].charAt(n);
//             }else{
//                 answer[i] += arr[i].charAt(n + h);
//                 dong[i] += arr[i].charAt(n + h);
//             }
//         }
//     }
//     answer.sort();
//     for( let i = 0; i < length; i++){
//         for( let h = 0; h < dong.length; h++){
//             if( answer[i] === dong[h]) {
//                 answer[i] = arr[h];
//             }
//         }
//     }
//     return answer;
// }


// console.log(checkString(arr, 2));


////질문
// const dong = ["abce", "abcd", "cdx"];

// function solution(strings, n){
//     strings.sort((a, b) => {
//         if(a[n] === b[n]){
//             return a.localeCompare(b);
//         } else{
//             return a[n].localeCompare(b[n]);
//         }
//     });
//     return strings;
// }

// console.log(solution(dong));


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