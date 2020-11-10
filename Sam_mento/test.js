

let arr =[3,2,6];
let divisor = 10;

function solution(arr, divisor) {
    let answer = arr.filter(n => n%divisor === 0);
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;

}

console.log(solution(arr.divisor));



  // let answer = arr.filter(n => n % divisor === 0);
    // if(answer.length === 0){
    //     count++;
    //     console.log(`count는 ${count}`);
    //     answer.push(-1)
    // }else{
    //     count1++;
    //     console.log(`count는 ${count1}`);
    //     answer.sort((a,b) => a-b);
    // }
