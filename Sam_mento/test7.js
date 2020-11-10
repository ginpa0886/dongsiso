let arr =[3,2,6];
let divisor = 10;
let dong = [];
let won = [];

function solution(arr, divisor) {
    let count = 0;
    let count1 = 0;
    let answer = arr.filter(n => n%divisor === 0);
    console.log('왜 돌아왔니')
    if(answer.length === 0){
        count++;
        console.log(`count는 ${count}`);
        return answer.push(-1);
    }else{
        count1++
        console.log(`count1는 ${count1}`);
        answer.sort((a,b) => a-b);
    }
    console.log(answer);
    return answer;
}

function happy(won){
    if(-1 == true){
        console.log(`이게뭐죠`)
    }
}



console.log(solution(arr,divisor));
console.log(dong.push(-1));
console.log(dong);
console.log(happy(won));
console.log(won);