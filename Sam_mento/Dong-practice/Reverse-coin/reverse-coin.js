
const coin = document.querySelectorAll('.section-body div');
const sectionSelect = document.querySelectorAll('.section-body section');
const turnButton = document.querySelectorAll('.user-info button')[0];
const turnWord = document.querySelectorAll('.user-info strong')[0];
const body = document.body;
const conWord = document.querySelectorAll('.game-body')[0];
const coinMap = [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];



sectionSelect.forEach(v => {
  v.addEventListener('click', function(){

  })
})


// coin 각각에 눌렀을 때 색이 변경 되게 만들었음
// forEach에서 index를 사용하여서 
coin.forEach((v, i) => {
  v.addEventListener('click', function(){
    if(coinMap[i] === 0){
      return;
    }
    if(v.style.background === 'white'){
      v.style.background = "rgb(248, 195, 20)";
      v.style.color = "aliceblue"
    }else{
      v.style.background = "white";
      v.style.color = "white";
    }
    coinMap[i] *= -1;
  })
});

turnButton.addEventListener('click', function(){
  if(coinMap.includes(-1)){
    if(turnWord.textContent == '1'){
      turnWord.textContent = '2';
    }else{
      turnWord.textContent ='1';
    }
  }
  for(let i = 0; i < coinMap.length; i++){
    if(coinMap[i] === -1){
      coinMap[i] = 0;
    }
  }

  if(coinMap.filter(v => v === 1).length === 0){
    conWord.textContent = `축하합니다! ${turn}`
    body.append(conWord);
  }
})



