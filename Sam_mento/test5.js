


// for(let i = 0; i<dong.length; i++){
//    answer = dong.filter( won =>
//          !won.includes(dong[i]));
// }


// console.log(answer);
// ------------------------------------------
// function solution(dong, won){
    
//     for(let i = dong.length-1; i >= 0; i--){
//         if(won.includes(dong[i])){
//             dong.splice(won.indexOf(dong[i]),1);
//         }
//     }
//     return dong;
// }
// -----------------------------------------------
// //비효율적 함수
// function solution(dong, won){
//     let answer = '';
//     for(let i = dong.length-1; i >= 0; i--){
//         if(!won.includes(dong[i])){
//             answer += dong[i];
//         }else{
//             won.splice(won.indexOf(dong[i]) ,1)
//         }
//     }
//     return answer;
// }
// -----------------------------------------

// // 그냥 두개의 배열을 비교하는 방식
// function solution(dong, won){
//     let answer = dong.filter(function(num){
//         return !won.includes(num);
//     })
//     return answer;
// }

let dong = ["dong", "won", "jeong", "dong"];
let won = ["won", "dong", "jeong"];

// function solution(dong, won){
//     const length = dong.length-1
//     for(let i = length; i >= 0; i-- ){
//         if(won.includes(dong[i])){
//             won.splice(won.lastIndexOf(dong[i]),1);
//             dong.splice(dong.lastIndexOf(dong[i]),1)
//             // console.log(i);
//             // console.log(dong);
//             // console.log(won);
//         }
//     }
//     return dong.join();
// }



function solution(dong, won){
    
    let answer = dong.filter(function(num){
        return !won.includes(num);
    })

    console.log(answer.length);
    console.log(answer);
    if(answer.length === 0){
        console.log('doing');
        for(let i = 0; i < won.length; i++){
            let count = 0;
            for(let h = 0; h<dong.length; h++){
                if(dong[h] === won[i]){
                    count++;
                    console.log(count);
                }
            }
            if(count === 2){
                answer = won[i];    
            }
        }
    }
    return answer;
}

console.log(solution(dong,won));


function happy(dong, won){
        let num1 = dong.sort();
        let num2 = won.sort();
        console.log(num1);
        console.log(num2);
        const length = num1.length;
        const length2 = num2.length;
        for(let i = length-1; i >= 0; i--){
            for(let h = length2-1; h >= 0; h--){
                if(num1[i] === num2[h]){
                    num1.splice(num1.lastIndexOf(num1[i]),1);
                    num2.splice(num2.lastIndexOf(num2[h],1));
                    console.log(num1);
                    console.log(num2);
                }
            }
        }
    
        return num1.join();
    }