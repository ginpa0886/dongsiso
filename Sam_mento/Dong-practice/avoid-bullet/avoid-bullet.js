const body = document.body;
const character = document.querySelector('.me');


// 현재 character 위치 값 설정기 초기위치값을 반영해서 설정
let up = 0;
let left = 0;
// let height = 0;

// character 속도 증가값 설정 변수
let speed = 50;



// character에게 움직임 이벤트
window.addEventListener('keydown', function(e){
  // console.log(e);
  // console.log(e.key);

  const key = keyCheck(e.key);
  
  if(!key){
    return 0;
  }
  moveCharacter(key);


  
  // character.style.top = `${height}px`;
  // height += 10;
})

// 사용자 키 확인기
function keyCheck(event){
  // console.log('keycheck기 실행됨');
  // console.log(2222, event);
  switch(event){
    case 'ArrowDown' :
      return 'down';
    case 'ArrowLeft' :
      return 'left';
    case 'ArrowUp' :
      return 'up';
    case 'ArrowRight' :
      return 'right';

    default :
      return false;
  }
}

// 키에 따른 transition 변화 함수
// 기준은 top 과 left로 정함.
function moveCharacter(key){
  if(key === 'down'){
    up += speed;
    character.style.top = `${up}px`
    return 0;
  }
  if(key === 'left'){
    left -= speed;
    character.style.left = `${left}px`;
    return 0;
  }
  if(key === 'up'){
    up -= speed;
    character.style.top = `${up}px`;
    return 0;
  }
  if(key === 'right'){
    left += speed;
    character.style.left = `${left}px`;
    return 0;
  }
}

// px를 없애는 함수
function removePx(x, y){
  const answer = [];
  answer.push(Number(x.substring(0, x.length-2)));
  answer.push(Number(y.substring(0, y.length-2)));
  return answer;
}







// 격리 조치
// ------------------------------------------(1)
//  // 현재 캐릭터의 위치
//   // string값을 받아지므로, 전환을 해야함. (px를 제외시키면서)
//   const locationX = character.style.left;
//   const locationY = character.style.top;

//   // 현재 character가 있는 위치의 값 갖는 것이 변수 answer.
//   // answer[0] = X좌표 값, answer[1] = Y좌표 값 
//   const answer = removePx(locationX, locationY);
  

//   console.log(answer);
// ----------------------------------------------