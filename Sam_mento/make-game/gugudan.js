
let a = 3;

while(a > 0){
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let result = num1 * num2;
    console.log(result);
    let answer = prompt(`${num1} 곱하기 ${num2}는?`)

    if(answer == result){
        alert(`정답입니다!`);
    }else{
        alert(`오답입니다!`);
        a--;
    }
}

