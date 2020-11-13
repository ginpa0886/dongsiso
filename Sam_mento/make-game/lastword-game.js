

let dong = '첫글자';
let a = 3;
while (a > 0){
    let answer = prompt(dong);
    if(dong[dong.length-1] === answer[0]){
        dong = answer;
    }else if(a === 1){
        alert(`Game Over`);
    }else{
        alert(`틀렸습니다! 목숨이 ${a-1}개 남았습니다`);    
        a--;
    }
}
// let num = random();
// let dong = Math.random();
// let won = 3.9235;
// console.log(won);
// won = Math.floor(won);
// console.log(dong);
// console.log(won);
// console.log(num);

