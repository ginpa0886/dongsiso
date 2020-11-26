
const coin = document.querySelectorAll('.section-body div');
const sectionSelect = document.querySelectorAll('.section-body section');
const turnButton = document.querySelectorAll('.user-info button')[0];
const turnWord = document.querySelectorAll('.user-info strong')[0];
const lineNumber = document.querySelectorAll('.section-line strong');
const body = document.body;
const conWord = document.querySelectorAll('.game-body')[0];
const coinMap = [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const coinMapCount = [1, 1, 1, 1, 1];




sectionSelect.forEach((v, i) => {
  v.addEventListener('click', function(){

    // section이 한번만 선택되게 만든 것(한번씩만 실행시키게 하기 위한 방법)
    // coinMapCount라는 곳에 section의 index와 공유하게 만든 배열을 사용하여서 초기 값(스타일)인 모두 원래의 상태로 돌려놓게 만듬
    if(coinMapCount[i] === 1){

      // 선택시 선택되지 않은 section들에 대해서 투명도와 숫자의 색과 크기 조절 하는 부분
      sectionSelect[i].style.opacity = '1';
      lineNumber[i].style.fontSize = '20px';
      lineNumber[i].style.color = 'red';

      for(let j = 0; j < coinMap.length; j++){
        if(coinMap[j] === -1){
          coin[j].style.background = "rgb(248, 195, 20)";
          coin[j].style.color = "aliceblue"
          coinMap[j] = 1;
        }
      }

      // 선택하지 않은 section의 스타일들을 투명도 0.5와 라인 숫자에 대한 스타일 초기값으로 복귀시키는 것
      for(let h = 0; h < sectionSelect.length; h++){
        if(i !== h){
          sectionSelect[h].style.opacity = '0.5';
          lineNumber[h].style.fontSize = '16px';
          lineNumber[h].style.color = 'black';
        }
      }
      // 이후에 선택된 section의 index를 가지는 곳에 ++을 해줌
      coinMapCount[i]++;

      // 선택한 section외에 곳들에는 전부 초기값의 1을 가지게 만듬
      for(let h = 0; h < coinMapCount.length; h++){
        if(i !== h){
          coinMapCount[h] = 1;
        }
      }
    }
    
  })
})


// coin 각각에 눌렀을 때 색이 변경 되게 만들었음
// forEach에서 index를 사용하여서 
coin.forEach((v, i) => {
  v.addEventListener('click', function(){

    // 각기 누른 코인(coin)의 index와 coinMap에 있는 index를 비교해서 눌린 코인인 경우를 제외 시키는 조건문
    // 확정 처리되었던 코인이 더이상 못눌리게 만드는 것
    if(coinMap[i] === 0){
      return;
    }
    
    // 원래 눌린적 있는 코인이라면 bakcground가 white일 것이므로 그것을 조건부로 구별함
    // 배경이 white인 경우는 눌렸을 경우 다시 원래 색으로 돌아오게 하는 if문
    if(v.style.background === 'white'){
      v.style.background = "rgb(248, 195, 20)";
      v.style.color = "aliceblue"

    // 코인의 배경색이 white가 아닌경우는 눌렸을 때 이벤트로 배경색이 white로 바뀌게 만들었음
    }else{
      v.style.background = "white";
      v.style.color = "white";
    }

    // 눌렸을 때 마다, coin의 index와 coinMap의 index를 연동시켜놓은 개념이므로, -1을 곱함으로써
    // 눌렸는지 안눌렸는지를 체크함
    coinMap[i] *= -1;
  })
});

turnButton.addEventListener('click', function(){
  // 확인 버튼이 눌렸을때, coinMap에 -1이 하나라도 있어야 턴이 넘어 갔다는 것으로 조건을 주었음
  if(coinMap.includes(-1)){
    // 1일때는 2로, 2일때는 1로 text가 바뀌게 만들었음
    if(turnWord.textContent == '1'){
      turnWord.textContent = '2';
    }else{
      turnWord.textContent ='1';
    }
  }

  // coinMap안에 있는 선택되었던 coin인 -1 이라는 값들을 0으로 바꿔줘서 사라진 동전처럼 처리
  for(let i = 0; i < coinMap.length; i++){
    if(coinMap[i] === -1){
      coinMap[i] = 0;
    }
  }

  // 확인이 눌릴 때 마다 모든 포커스되었던 부분들이 원래 상태로 돌아오게 만듬
  for(let i = 0; i < sectionSelect.length; i++){
    sectionSelect[i].style.opacity = '1';
    lineNumber[i].style.fontSize = '16px';
    lineNumber[i].style.color = 'black';
  }

  // 승리조건 확인
  // 확인을 누를 때마다, coinMap에서 1(남아있는 동전)을 확인하고, 남아있는 값이 없을 경우
  // 이벤트 발생
  const victory = coinMap.filter(v => v === 1).length;
  if(victory === 0){
    conWord.textContent = `축하합니다! ${turnWord.textContent}번 플레이어님이 졌네요!`
    body.append(conWord);
  }
})



