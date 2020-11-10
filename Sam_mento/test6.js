


// function solution(parti, comple){
//     parti.sort();
//     comple.sort();
//     const num1 = parti.length;
//     const num2 = comple.length;
//     // console.log(parti);
//     // console.log(comple);
//     for(let i = num1-1; i >=0; i--){
//         for(let h = num2-1; h >= 0; h--){
//             if(parti[i] === comple[h]){
//                 // console.log(num1);
//                 // console.log(num2);
//                 console.log(parti.indexOf(parti[i]));
//                 console.log(comple.indexOf(comple[h]));
//                 parti.splice(parti.indexOf(parti[i]), 1);
//                 comple.splice(comple.indexOf(comple[h]), 1);
//             }
//         }
//     }

//     return parti;
// }

// let parti = ["leo", "kiki", "eden"];
// let comple = ["eden","kiki"];


let parti = ["mislav", "stanko", "mislav", "ana"];
let comple = ["stanko", "ana", "mislav"];

function solution(parti, comple){
    parti.sort();
    comple.sort();
    console.log(parti);
    console.log(comple);
    let answer = parti.filter((n,i) =>
        !(n === comple[i])
    )
    console.log(answer);

    return answer[0];
}

console.log(solution(parti, comple));