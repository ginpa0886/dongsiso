
const n = 17;

function findprime(n){
   
    let won = [];
    let dong = []; 

    for(let i = 0; i <= n; i++){
        let answer =[];
        if( i < 8){
            for(let a = 1; a <= n; a++){
                if( i % a === 0){
                    answer.push(a);
                }
            }
            if(answer.length === 2){
                won.push(answer[answer.length-1]);
            }
        }else{
            for(let h = 0; h < won.length; h++){
                if( i % won[h] === 0){
                    break;
                }else{
                    won.push(i);
                    break;
                    
                }
            }
        }
    }

    return won;
}

console.log(findprime(17));


// -----------------------------------

//     for(let i = 2; i <= n; i++){
//         let answer = [];
//         if( i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
//             won.push(i);
//         }
//         else if( i < 8){
//             for(let a = 1; a <= n; a++){
//                 if( i % a === 0){
//                     answer.push(a);
//                 }
//             }
//             if(answer.length === 2){
//                 won.push(answer[answer.length-1]);
//             }
//         }
//     }
//     for(let i = 0; i < won.length; i++){
//         for(let h = 2; h <= won[i]-1; h++){
//             if( won[i] !== won[h] && won[i] % won[h] === 0 ){
//                 // console.log(won[i]);
//                 // console.log(won[h]);
//                 // console.log(won.length);
//                 // console.log(won[30]);
//                 // won.splice(i, 1);
//                 // console.log(won.length);
//                 // console.log(won[30]);
//                 // console.log(won);
//                 dong.push(won[i]);
                
//             }
//         }
//     }
//     // console.log(dong);
//     won = won.filter(x => !dong.includes(x));
//     return won;
// }




//     // for(let h = 0; h < won.length; h++){
//     //     let answer = [];
//     //     for(let p = 0; p <= n; p++){
//     //         if(won[h] % p === 0){
//     //             answer.push(p);
//     //         }
//     //     }
//     //     if(answer.length === 2){
//     //         dong.push(answer[answer.length-1]);
//     //     }
//     // }
//     // return dong;


// console.log(findprime(290));

// -----------------------------------









//     for(let i = 1; i <= n; i++){
//         let answer = [];
//         if(i < 8){
//             for(let h = 1; h <= n; h++){
//                 if(i % h === 0){
//                 answer.push(h);
//                 }
//             }
//         }
//         else if( i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i & 7 !== 0){
//             for(let p = 1; p <= n; p++){
//                 if(i % p === 0){
//                     answer.push(p);
//                 }
//             }
//         }
    
//         if(answer.length === 2){
//             dong.push(answer[answer.length-1]);
//         }

//     }
//     return dong.length;
// }




// for(let h = 1; h <= n; h++){
        //     if( i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i & 7 !== 0 && i % h === 0 ){
        //         answer.push(h);
        //     }
        //     else if( i < 8 && i % h === 0 ){
        //         answer.push(h);
        //     }
        // } 