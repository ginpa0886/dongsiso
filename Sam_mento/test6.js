// let dong = ["dong", "won", "jeong", "dong"];
// let won = ["won", "dong", "jeong"];


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
    let min = 0;
    let answer =[];
   

    for(let i = 0; i < n; i++){
        student1[i] = st1[i % 5];
        student2[i] = st2[i % 8];
        student3[i] = st3[i % 10];
    }
    for(let i = 0; i < answers.length; i++){
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
    for(let i = 1; i < answer.length; i++){
        if(answer[i-1] > answer[i])
    }

    return answer.sort();
}

console.log(happy(answers))