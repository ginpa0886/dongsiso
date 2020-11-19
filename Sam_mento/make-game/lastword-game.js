

let dong = '랜덤말잇기';
let a = 3;
alert(`안녕하세요 랜덤말 잇기 게임에 오신 것을 환영합니다.`);
alert(`랜덤말 잇기 게임의 규칙은 간단합니다.`);
alert(`컴퓨터가 주어진 단어의 특정 번째의 글자를 주면 그 글자로 끝말잇기를 하면 됩니다.`)
alert(`예를 들어, '컴퓨터의 2번째 글자로' 라는 말이 나오면 '퓨'로 시작하는 단어를 적으시면 됩니다.`);
alert(`단어의 최대 길이는 5글자로 제한하며, 외자와 띄어쓰기를 적으면 안됩니다.`);
alert(`목숨은 총3개이며, 한번 틀릴 때마다 한개씩 감소 됩니다.`);
alert(`아직까지 제한 시간은 없으니 천천히 즐겨보시기 바랍니다. 스릴 있게 즐기고 싶으시다면 친구와 함께 해보시는 것도 추천드려요`);
alert(`자 그럽 시작하겠습니다`);
while (a > 0){
    let ran = parseInt(Math.random()*dong.length);
    alert(`'${dong}'의 ${ran+1}번째 글자로!`)
    let answer = prompt(dong);
    
    if(answer.length > 5 || answer.includes(' ') || answer.length === 1){
      alert(`틀렸습니다! 목숨이 ${a-1}개 남았습니다`);    
        a--;
    }
    else if(dong[ran] === answer[0]){
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

