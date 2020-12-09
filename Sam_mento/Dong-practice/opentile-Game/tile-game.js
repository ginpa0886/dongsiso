
const player1Card = document.querySelectorAll('.player1 .number div');
const player2Card = document.querySelectorAll('.player2 .number div');


const player1 = document.querySelectorAll('.player1')[0];
const player2 = document.querySelectorAll('.player2')[0];

const player1Field = document.querySelectorAll('.field-player1')[0];
const player2Field = document.querySelectorAll('.field-player2')[0];

const field = document.querySelectorAll('.field .count')[0];

const selectButton = document.querySelectorAll('.select .select-body button')[0];

let who = 1;
let check = 0;
let test = 0;

setTimeout(() => {
  const someThing = document.createElement('div');
  someThing.className = "holdPage";
  someThing.style.background = "cadetblue";
  someThing.textContent = 'Player2'
  player2.append(someThing);

}, 1000);


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
    testTile1.style.background = `${player1Card[i].style.background}`;
    testTile1.textContent = `${player1Card[i].textContent}`;
    testTile1.style.color = `${player1Card[i].style.color}`;
    player1Field.append(testTile1);
    test++;
  })
});

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
    testTile2.style.background = `${player2Card[i].style.background}`;
    testTile2.textContent = `${player2Card[i].textContent}`;
    testTile2.style.color = `${player2Card[i].style.color}`;
    player2Field.append(testTile2);
    test++;
  })
});


selectButton.addEventListener('click', function() {
  check++;
  if(check === 1){
    countAndMakehold();
  }
  

})


  // 상대 숫자가 보이지 않게 페이지 가려주는 함수
  function countAndMakehold(){
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
        player2.removeChild(removeThing);
        field.removeChild(countTime);
    
        const someThing = document.createElement('div');
        someThing.className = "holdPage";
        someThing.style.background = "cadetblue";
        someThing.textContent = 'Player1'
        player1.append(someThing);
        who *= -1;
        check = 0;
        test = 0;
      }else {
        player1.removeChild(removeThing);
        field.removeChild(countTime);
    
        const someThing = document.createElement('div');
        someThing.className = "holdPage";
        someThing.style.background = "cadetblue";
        someThing.textContent = 'Player2'
        player2.append(someThing);
        who *= -1;
        check = 0;
        test = 0;
      }
    }, 7000);
  }

  function colorCheckAndFeature(wc){
    if(Number(wc.textContent) % 2 === 0){
      wc.style.background === 'black';
      wc.style.color === 'white';
    }else{
      wc.style.background === 'white';
      wc.style.color === 'black';
    }
    return 0;
  }