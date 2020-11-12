





// 완주하지 못하는 선수
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





// 모의고사
let answers = [1,3,2,4,2,1,3,2,4,2];

function happy(answers){
    const st1 = [1,2,3,4,5];
    const st2 = [2,1,2,3,2,4,2,5];
    const st3 = [3,3,1,1,2,2,4,4,5,5];
    const n = answers.length;
    let student1 = [];
    let student2 = [];
    let student3 = [];
    let count1 = 0; 
    let count2 = 0;
    let count3 = 0;
    let answer =[];
    let dong = [];
    

    for(let i = 0; i < n; i++){
        student1[i] = st1[i % 5];
        student2[i] = st2[i % 8];
        student3[i] = st3[i % 10];
    }
    
    for(let i = 0; i < n; i++){
        if(answers[i] === student1[i]){
            count1++;
        }
        if(answers[i] === student2[i]){
            count2++;
        }
        if(answers[i] === student3[i]){
            count3++;
        }
    }
    answer = [count1, count2, count3];
    let num = Math.max.apply(null, answer);

    if(num === count1){
        dong.push(1);
    }
    if(num === count2){
        dong.push(2);
    }
    if(num === count3){
        dong.push(3);
    }
    return dong;
}

console.log(happy(answers))




// 나누어 떨어지는 배열
let arr = [5,9,7,10];
let divisor = 5;

function solution(arr, divisor){
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0 ){
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer.sort((a,b) => a-b);
}


console.log(solution(arr, divisor));