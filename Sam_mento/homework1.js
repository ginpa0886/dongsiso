
const numbers = [2, 1, 3, 4, 1];


function solution(numbers) {
    const answer = [];
    for( let i = 0; i<numbers.length; i++){
        for( let h = i + 1; h<numbers.length; h++){
            let num = numbers[i]+ numbers[h];
            if(answer.includes(num) === false){
                answer.push(num);
            }

        }
    }
    let min;
    for( let i = 0; i<answer.length; i++){
        for(let h = i + 1; h<answer.length; h++){
            if(answer[i] > answer[h]){
                min = answer[h];
                answer[h] = answer[i];
                answer[i] = min;
            }
        }
    }
    return answer;
}

console.log(solution(numbers));

// //프로그래머스 답_1
// function solution(numbers) {
//     const answer = [];
//     for( let i = 0; i<numbers.length; i++){
//         for( let h = i + 1; h<numbers.length; h++){
//             let num = numbers[i]+ numbers[h];
//             if(answer.includes(num) === false){
//                 answer.push(num);
//             }

//         }
//     }
//     let min;
//     for( let i = 0; i<answer.length; i++){
//         for(let h = i + 1; h<answer.length; h++){
//             if(answer[i] > answer[h]){
//                 min = answer[h];
//                 answer[h] = answer[i];
//                 answer[i] = min;
//             }
//         }
//     }
//     return answer;
// }


// -----------------------------------------------------

//length를 이용한 문자열 길이 확인하기
//charAt()함수라는게 있군요


//length의 기능 확인
let dong = 'dongwon';
console.log(dong.length);

//charAt() 기능 확인
let name = dong.charAt(0);
let name2 = dong.charAt(4);
console.log(name);
console.log(name2);


let exercise = 'abcde';
let wordslength = exercise.length;
// console.log(wordslength/2 + 0.5);
console.log(exercise.charAt(exercise.length/2 - 0.5));
console.clear();





function middlename(words){
    if(words.length % 2 === 0){
        // words.charAt(words.length/2 - 1);
        // words.charAt(words.length/2);
        console.log(`" ${words.charAt(words.length/2 - 1)} "`);
        console.log(`" ${words.charAt(words.length/2)} "`);
    }else{
        // words.charAt(words.length/2 - 0.5);
        console.log(`" ${words.charAt(words.length/2 - 0.5)} "`);
    }
}

console.log(middlename(exercise));


// const exercise = 'abcde';
// const exercise2 = 'qwer';

// function middlename(words){
//     if(words.length % 2 === 0){
       
//         console.log(`"${words.charAt(words.length/2 - 1)}${words.charAt(words.length/2)}"`,);
//     }else{
        
//         console.log(`"${words.charAt(words.length/2 - 0.5)}"`);
//     }
// }
// console.log(middlename(exercise));
// console.log(middlename(exercise2));


////여기부터 2번



// const exercise = 'abcde';
// const exercise2 = 'qwer';

// function middlename(words){
//     if(words.length % 2 === 0){
//         console.log(`"${words.charAt(words.length/2 - 1)}${words.charAt(words.length/2)}"`);
//     }else{
        
//         console.log(`"${words.charAt(words.length/2 - 0.5)}"`);
//     }
// }
// middlename(exercise);
// middlename(exercise2);
// // --------------------------------------------------------------------------------------------

// const exercise3 = 'dongwon';
// const exercise4 = 'chamci';

// function middlename2(words){
//     if(words.length % 2 === 0){
       
//         console.log(`"${words.charAt(words.length/2 - 1)}${words.charAt(words.length/2)}"`,);
//     }else{
        
//         console.log(`"${words.charAt(words.length/2 - 0.5)}"`);
//     }
// }
// console.log(middlename2(exercise3));
// console.log(middlename2(exercise4));

// // -----------------------------------------------------------------------------------------------

const exercise5 = 'dongwon';
const exercise6 = 'chamci';

function middlename3(words){
    if(words.length % 2 === 0){
       
        words.charAt(words.length/2 - 1) + words.charAt(words.length/2);
    }else{
        
        words.charAt(words.length/2 - 0.5)
    }
}
console.log(middlename3(exercise5));
console.log(middlename3(exercise6));



////프로그래머스 답_2
// function solution(s) {
//     var answer = '';
//     if(s.length % 2 === 0){
//         answer = s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
//     }else{
        
//         answer = s.charAt(s.length/2 - 0.5);
//     }
//     return answer;
// }



