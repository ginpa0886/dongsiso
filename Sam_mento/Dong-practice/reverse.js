
const n = 45;


function happy(n){
    let dong = n.toString(3);
    console.log(dong);
    let answer = 0;
    for(let i = 0; i < dong.length; i++){
       answer += Math.pow(3, i) * parseInt(dong[i]);
    }
    
    return answer;
}
console.log(happy(n));




// for(let i = 16; i >= 0; i++){
//     for(let h = 3; h >= 0; h--){
//         if(num - Math.pow(3, i) * h > 0){
//             won = h * Math.pow(10, i);
//             num = num - Math.pow(3, i) * h;
//             console.log(won);
//         }
//     }
// }


