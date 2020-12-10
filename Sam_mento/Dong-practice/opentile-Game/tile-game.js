
const player1Card = document.querySelectorAll('.player1 .number div');
const player2Card = document.querySelectorAll('.player2 .number div');
const playerCardBody1 = document.querySelectorAll('.player1 .number')[0];
const playerCardBody2 = document.querySelectorAll('.player2 .number')[0];
const gameBody = document.querySelectorAll('.game-body')[0];

const player1 = document.querySelectorAll('.player1')[0];
const player2 = document.querySelectorAll('.player2')[0];

const player1Field = document.querySelectorAll('.field-player1')[0];
const player2Field = document.querySelectorAll('.field-player2')[0];

const field = document.querySelectorAll('.field .count')[0];

const selectButton = document.querySelectorAll('.select .select-body button')[0];

// 누구차례인지를 정하는 check기
let who = 1;

// 확정 버튼이 눌렸는지 확인하는 check기
let check = 0;

// 색 변경을 위한 check기
let test = 0;

//
const fightOther = [0, 0];

setTimeout(() => {
  const someThing = document.createElement('div');
  someThing.className = "holdPage";
  someThing.style.background = "cadetblue";
  someThing.textContent = 'Player2'
  player2.append(someThing);

}, 1000);

// 각 카드 마다 기능
player1Card.forEach((v,i) => {
  v.addEventListener('click', function() {
    player1Card.forEach(v => {
      v.style.background = "white";
      v.style.color = "black";
    })
    if(test === 1){
      const removeTest = document.getElementsByClassName('my-Tile1')[0];
      player1Field.removeChild(removeTest);
      test = 0;
    }
    
    player1Card[i].style.background = "black";
    player1Card[i].style.color = "white";

    const testTile1 = document.createElement('div');
    testTile1.className = "my-Tile1";
    colorCheckAndFeature(testTile1, player1Card[i]);

    // testTile1.style.background = `${player1Card[i].style.background}`;
    // testTile1.textContent = `${player1Card[i].textContent}`;
    // testTile1.style.color = `${player1Card[i].style.color}`;
    player1Field.append(testTile1);
    test++;
  })
});

// 각 카드 마다 기능
player2Card.forEach((v,i) => {
  v.addEventListener('click', function() {
    player2Card.forEach(v => {
      v.style.background = "white";
      v.style.color = "black";
    })
    player2Card[i].style.background = "black";
    player2Card[i].style.color = "white";

    if(test === 1){
      const removeTest = document.getElementsByClassName('my-Tile2')[0];
      player2Field.removeChild(removeTest);
      test = 0;
    }
    
    player2Card[i].style.background = "black";
    player2Card[i].style.color = "white";

    const testTile2 = document.createElement('div');
    testTile2.className = "my-Tile2";

    colorCheckAndFeature(testTile2, player2Card[i]);

    // testTile2.style.background = `${player2Card[i].style.background}`;
    // testTile2.textContent = `${player2Card[i].textContent}`;
    // testTile2.style.color = `${player2Card[i].style.color}`;
    player2Field.append(testTile2);
    test++;
  })
});

// 턴 넘기기 버튼에 기능 넣기
selectButton.addEventListener('click', function() {
  check++;
  if(check === 1){
    countAndMakehold();
  }
})


  // 상대 숫자가 보이지 않게 페이지 가려주는 함수
  function countAndMakehold(){
    if(test === 1){
      console.log('실행됨');
      const removeThing = document.getElementsByClassName('holdPage')[0];
      const countTime = document.createElement('div');
      countTime.className = "count";
      field.append(countTime);
    
      let a = 5;
    
      const count = setInterval(() => {
        countTime.textContent = `${a}`;
        if(a === 0){
          clearInterval(count);
        }
        a--;
      }, 1000);

      setTimeout(() => {
        if(who === 1){
          const cardColor1 = document.getElementsByClassName('my-Tile1')[0];
          cardColor1.style.color = `${cardColor1.style.background}`;
          player1Card.forEach(v => {
            v.style.background = "white";
            v.style.color = "black";
          });

          player2.removeChild(removeThing);
          field.removeChild(countTime);
          who *= -1;
          check = 0;
          test = 0;
          fightOther[0]++;
          if(fightOther[0] === 1 && fightOther[1] === 1){
            fightNumber();
          }
      
          const someThing = document.createElement('div');
          someThing.className = "holdPage";
          someThing.style.background = "cadetblue";
          someThing.textContent = 'Player1'
          player1.append(someThing);
          
        }else {

          const cardColor2 = document.getElementsByClassName('my-Tile1')[0];
          cardColor2.style.color = `${cardColor2.style.background}`;
          player2Card.forEach(v => {
            v.style.background = "white";
            v.style.color = "black";
          })

          player1.removeChild(removeThing);
          field.removeChild(countTime);
          who *= -1;
          check = 0;
          test = 0;
          fightOther[1]++;
          if(fightOther[0] === 1 && fightOther[1] === 1){
            fightNumber();
          }
      
          const someThing = document.createElement('div');
          someThing.className = "holdPage";
          someThing.style.background = "cadetblue";
          someThing.textContent = 'Player2'
          player2.append(someThing);
          
        }
      }, 7000);
    }

  }

  // 짝수와 홀수에 따라서 색깔을 구분하게 하는 함수
  function colorCheckAndFeature(testTile, playerCard){

    testTile.textContent = `${playerCard.textContent}`;

    if(Number(playerCard.textContent) % 2 === 0){
      testTile.style.background = 'black';
      testTile.style.color = 'white';
    }else{
      testTile.style.background = 'white';
      testTile.style.color = 'black';
    }
    return 0;
  }


  // 결과창에 결과를 띄우는 함수
  function fightNumber(){
    const player1 = document.getElementsByClassName('my-Tile1')[0];
    const player2 = document.getElementsByClassName('my-Tile2')[0];

    const fightPage = document.createElement('div');
    const fightText = document.createElement('strong');
    const winner = document.createElement('strong');
    const endButton = document.createElement('button');

    const player1Number = Number(player1.textContent);
    const player2Number = Number(player2.textContent);
    const result = player1Number + player2Number;

    // 어떤 숫자가 이겼는지 확인해주는 함수 실행
    // text형식으로 값을 받아옴
    const winNumber = whoWin(player1Number, player2Number);

    fightPage.className = "fight-Page";
    fightText.textContent = `${player1Number} + ${player2Number} = ${result}`;
    winner.textContent = `${winNumber}`;
    endButton.textContent = '다음 게임 시작';

    let timecheck = 0;

    // 다음 게임이 시작되려고 할때 누를 버튼의 이벤트 리스너 관리
    endButton.addEventListener('click', function(){
      timecheck++;
      if(timecheck === 1){
        let a = 5;
        setTimeout(() => {
          fightText.textContent = '';
          winner.textContent = '';

          const timeCount = setInterval(() => {
            fightText.textContent = `${a}`;
            if(a === 0){
              clearInterval(timeCount);
              clearPage();
            }
            a--
          }, 1000);
        }, 1000);

      }
    })
    
    

    fightPage.append(fightText, winner, endButton);
    gameBody.append(fightPage);
  }


  // 누가 이겼는지 파악하는 함수
  function whoWin(number1, number2){

    const num1 = number1;
    const num2 = number2;

    const result = num1 + num2;
    const answer = [];

    if(num1 === num2){
      answer.push(num1);
      return `두 수가 같으므로 각 플레이어의 숫자가 지워집니다.`;
    }

    if(result > 10){
      answer.push(Math.max(num1, num2));
      answer.push(Math.min(num1, num2));
    }else{
      answer.push(Math.min(num1, num2));
      answer.push(Math.max(num1, num2));
    }
    RemoveLoseNum(answer[0], num1, num2);

    return `${answer[0]}이 이겼습니다! ${answer[1]}은 지워집니다.`
  }

  // 결과 페이지 지우는 것
  function clearPage(){
    const removerResultPage = document.getElementsByClassName('fight-Page')[0];
    const removeCard1 = document.getElementsByClassName('my-Tile1')[0];
    const removeCard2 = document.getElementsByClassName('my-Tile2')[0];

    player1Field.removeChild(removeCard1);
    player2Field.removeChild(removeCard2);
    gameBody.removeChild(removerResultPage);
    timecheck = 0;
  }

  //  진 숫자 지우기
  function RemoveLoseNum(result, num1, num2){
    
    console.log(`result == ${result}, num1 == ${num1}, num2 == ${num2}`)
    if(result === num1){
      let tempNum = 0;

      for(let i = 0; i < player2Card.length; i++){
        if(Number(player2Card[i].textContent) === num2){
          tempNum = i;
          break;
        }
      }
      const temp = document.querySelectorAll('.player2 .number div')[tempNum];
      playerCardBody2.removeChild(temp);
      
    }else{
      let tempNum = 0;

      for(let i = 0; i < player1Card.length; i++){
        if(Number(player1Card[i].textContent) === num2){
          tempNum = i;
          break;
        }
      }
      const temp = document.querySelectorAll('.player1 .number div')[tempNum];
      playerCardBody1.removeChild(temp);

    }
  }


  // 페이지 가리기 기능
  function KeepHoldPage(){
    if(true){
      const someThing = document.createElement('div');
      someThing.className = "holdPage";
      someThing.style.background = "cadetblue";
      someThing.textContent = 'Player2'
      player2.append(someThing);
    }else{
      const someThing = document.createElement('div');
      someThing.className = "holdPage";
      someThing.style.background = "cadetblue";
      someThing.textContent = 'Player1'
      player1.append(someThing);
    }
    
  }