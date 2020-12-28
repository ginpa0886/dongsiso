const enemyBackground = document.querySelector('.background-enemy');

// character HP
let characterHP = 3;


// enemy class에 붙는 번호로, 적의 개수를 파악하기 위해 만든 변수
let enemyCount = 0;
let enemyRemoveCount = 0;
// let enemyMovingCount = -1;

// 랜덤 위치를 만들기 위해서 width와 height의 비율을 정리한 변수
// const widthRate = Number(body.offsetWidth); // 가로의 100% 값
// const heightRate = Number(body.offsetHeight); // 세로의 100% 값
const widthRate = 1450;
const heightRate = 725;


// css에 실제로 적용된 캐릭터들에 픽셀 크기
const realSize = 50;

let checkCollision = true;

// enemy Size에 따른 맵 관리 용도의 변수(끝 부분에 띄움을 줄려고 만든 변수)
let enemySize = 10;

// enemy moving 관련 용도의 변수
let movingTime = 300;
let movingTerm = 15;

// enemy가 사라지는 시간
const timeToRemove = 6000;


// console.log(body.offsetHeight);


// ------ 적 생성 시킬 횟수, 생성 되는 시간 ------------------
// 적 개수
let everyEnemy = 10;
let howManyEnemy = everyEnemy;


// 생성 시간
let createTime = 1000;
// ---------------------------------------------------------

// 1초마다 적을 생성시키는 함수
const dong = setInterval(() => {
  creatEnemy();
  howManyEnemy--;
  if(howManyEnemy === 0){
    clearInterval(dong);
  }
}, createTime);



// 방향 체크 - 명시적으로 만드는 용도임
function setLotation(num){
  switch(num){
    case 1 :
      return 'top';
    case 2 :
      return 'bottom';
    case 3 : 
      return 'left';
    case 4 :
      return 'right';

    default :
      return false;
  }
}

// 적을 만드는 함수 + character에게 날라가는 기능
function creatEnemy(){
  const createRandomLocation = parseInt(Math.random()*10);
  const createlotation = parseInt(Math.random()*4) + 1;
  // parseInt(Math.random()*4) + 1;

  const enemyHead = setLotation(createlotation);

  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  enemy.classList.add(`count${enemyCount}`);
  enemyCount++;
  enemyBackground.append(enemy);

  // 랜덤한 가로 혹은 세로의 값을 구함.
  // 랜덤한 가로값
  const locationWidth = createRandomLocation * widthRate/10;
  // 랜덤한 세로값
  const locationHeight = createRandomLocation * heightRate/10;

  // 방향에 따른 생성
  // 여기서 주의해야할 사항은 시작점을 enemy의 크기 만큼으로 해줘야 view가 늘어나지 않는다는 것임(혹시나 하는 상황을 만들지 않게 하기 위해서);
  if(enemyHead === 'top'){
    enemy.style.left = `${locationWidth}px`;
    enemy.style.top = `${enemySize}px`
  }
  if(enemyHead === 'bottom'){
    enemy.style.left = `${locationWidth}px`;
    enemy.style.top = `${heightRate - enemySize}px`
  }
  if(enemyHead === 'left'){
    enemy.style.top = `${locationHeight}px`;
    enemy.style.left = `${enemySize}px`
  }
  if(enemyHead === 'right'){
    enemy.style.top = `${locationHeight}px`;
    enemy.style.left = `${widthRate}px`;
  }

  const enemyMovingCount = enemyCount - 1;
  // 반대편으로 움직이게 함수 실행
  setTimeout(() => {
    
    attackCharacter(locationWidth, locationHeight, enemyHead, enemy, enemyMovingCount);
  }, 1000);
  
  return 0;

}

// 적이 character에게 날라가도록 하는 함수
function attackCharacter(locationWidth, locationHeight, enemyHead, enemy, enemyMovingCount){
  // 확인 완료
  const enemyMovingCount1 = enemyMovingCount;
  // 인자들에 변수를 내부 스코프로 전환
  const enemy1 = enemy;
  const locationWidth1 = locationWidth;
  const locationHeight1 = locationHeight;
  const enemyHead1 = enemyHead;
  // ================= character , enemy1 좌표 완료 -----------------------------
  // character X 좌표
  const charWidht = left;
  // character Y 좌표
  const charHeigth = (-1) * up;
  
  // enemy1 X 좌표
  let enemyWidth = 0;
  // enemy1 Y 좌표 
  let enemyHeight = 0;
  
  // enemy1 X, Y 좌표 값 대입
  if(enemyHead1 === 'top'){
    enemyWidth = locationWidth1;
    enemyHeight = 0;
  }
  if(enemyHead1 === 'bottom'){
    enemyWidth = locationWidth1;
    enemyHeight = heightRate * (-1); // top 기준으로 되어있기 때문에 -1을 곱해줌
  }
  if(enemyHead1 === 'left'){
    enemyWidth = 0;
    enemyHeight = locationHeight1*(-1);
  }
  if(enemyHead1 === 'right'){
    enemyWidth = widthRate;
    enemyHeight = locationHeight1*(-1);
  }
  
// ----------------------------------------------------------------------------
 
  // enemy와 character간의 기울기
  const inclination = (charHeigth - enemyHeight) / (charWidht - enemyWidth);

  // y절편 구하기
  // b = y - ax
  const Xzero = charHeigth - (inclination * charWidht);

  // 직선의 방정식은 =>  y = inclination*x + Xzero
  // 각 생성되는 지역마다 다르게 넣어줄 변수 하나 생성.
  // 말그대로 X이거나 Y
  let enemyEnd = 0;


  // 상하 직선으로 나가게 하는 곳
  // check기를 만들려면 실시간으로 x,y 좌표값이 바뀌어야할 것임...
  // X 값 구하는 곳
  if(enemyHead1 === 'top'){
    enemyEnd = ((-1) * heightRate - Xzero) / inclination;
    if(Math.abs(enemyEnd) >= widthRate){
      if(enemyEnd < 0){
        enemyEnd = widthRate * (-1);
      }else{
        enemyEnd = widthRate;
      }
    }

    // 몇번에 걸쳐서 할지 선택하는 변수들
    let ma = movingTime;
    let timeMa = movingTerm;

    
    // enemy의 현 위치
    let enemyTop1 = enemyHeight;
    let enemyLeft1 = enemyWidth;

    // 실시간으로 바뀔 위치
    const iwantThisLeft = (enemyEnd - enemyLeft1) / ma;
    const iwnatThisTop = (heightRate - enemySize) / ma;

    // 실시간 움직임이 있는 곳
    const yam = setInterval(() => {
      const movingEnemy = document.querySelector(`.count${enemyMovingCount1}`)
      enemyTop1 += iwnatThisTop;
      enemyLeft1 += iwantThisLeft;
      
      
      movingEnemy.style.top = `${enemyTop1}px`;
      movingEnemy.style.left = `${enemyLeft1}px`

      //충돌 함수
      if(checkCollision){
        physicalCollision(enemyTop1, enemyLeft1, up, left);
      }
      
      ma--;
      if(ma === 0){
        clearInterval(yam);
      }
    }, timeMa);
    
    
    // enemy1.style.top = `${heightRate - enemySize}px`;
    // enemy1.style.left = `${enemyEnd - enemySize}px`;
  }

  if(enemyHead1 === 'bottom'){
    enemyEnd = (-1) * (Xzero / inclination);
    
    if(Math.abs(enemyEnd) >= widthRate){
      if(enemyEnd < 0){
        enemyEnd = widthRate * (-1);
      }else{
        enemyEnd = widthRate;
      }
    }

    // 몇번에 걸쳐서 할지 선택하는 변수들
    let ma = movingTime;
    let timeMa = movingTerm;

    
    // enemy의 현 위치
    let enemyTop1 = enemyHeight * (-1);
    let enemyLeft1 = enemyWidth;

    // 실시간으로 바뀔 위치
    const iwantThisLeft = (enemyEnd - enemyLeft1) / ma; //
    const iwnatThisTop = (heightRate / ma) * (-1); // 마지막 결과값이 0이 나와야 하므로

    // 실시간 움직임이 있는 곳
    const yam = setInterval(() => {
      const movingEnemy = document.querySelector(`.count${enemyMovingCount1}`)
      enemyTop1 += iwnatThisTop;
      enemyLeft1 += iwantThisLeft;
      
      
      movingEnemy.style.top = `${enemyTop1}px`;
      movingEnemy.style.left = `${enemyLeft1}px`

      //충돌 함수
      if(checkCollision){
        physicalCollision(enemyTop1, enemyLeft1, up, left);
      }
      
      ma--;
      if(ma === 0){
        clearInterval(yam);
      }
    }, timeMa);

    // enemy1.style.left = `${enemyEnd - enemySize}px`;
    // enemy1.style.top = `${enemySize - enemySize}px`;
    
  }

  // 좌우 직선으로 나가게 하는 곳
  // Y 값 구하는 곳

  if(enemyHead1 === 'left'){ 
    enemyEnd = (inclination * widthRate) + Xzero;
    
    if(Math.abs(enemyEnd) >= heightRate){
      if(enemyEnd < 0){
        enemyEnd = heightRate * (-1);
      }else{
        enemyEnd = heightRate;
      }
    }

    // 몇번에 걸쳐서 할지 선택하는 변수들
    let ma = movingTime;
    let timeMa = movingTerm;

    
    // enemy의 현 위치 좌표의 개념을 벗어나서 계산해야됨
    let enemyTop1 = enemyHeight * (-1);
    let enemyLeft1 = enemyWidth;

    // 실시간으로 바뀔 위치 거리
    const iwantThisLeft = widthRate / ma; 
    const iwnatThisTop = (enemyEnd * (-1) - enemyTop1) / ma; 

    // 실시간 움직임이 있는 곳
    const yam = setInterval(() => {
      const movingEnemy = document.querySelector(`.count${enemyMovingCount1}`)
      enemyTop1 += iwnatThisTop;
      enemyLeft1 += iwantThisLeft;
      
      
      movingEnemy.style.top = `${enemyTop1}px`;
      movingEnemy.style.left = `${enemyLeft1}px`

      //충돌 함수
      if(checkCollision){
        physicalCollision(enemyTop1, enemyLeft1, up, left);
      }
      
      ma--;
      if(ma === 0){
        clearInterval(yam);
      }
    }, timeMa);

    // enemy1.style.top = `${enemyEnd * (-1) - enemySize}px`;
    // enemy1.style.left = `${widthRate - enemySize}px`;
  }

  if(enemyHead1 === 'right'){
    enemyEnd = Xzero;
    
    if(Math.abs(enemyEnd) >= heightRate){
      if(enemyEnd < 0){
        enemyEnd = heightRate * (-1);
      }else{
        enemyEnd = heightRate;
      }
    }

    // 몇번에 걸쳐서 할지 선택하는 변수들
    let ma = movingTime;
    let timeMa = movingTerm;

    
    // enemy의 현 위치 좌표의 개념을 벗어나서 계산해야됨
    let enemyTop1 = enemyHeight * (-1);
    let enemyLeft1 = enemyWidth;

    // 실시간으로 바뀔 위치 거리
    const iwantThisLeft = (enemyLeft1 / ma) * (-1); 
    const iwnatThisTop = (enemyEnd * (-1) - enemyTop1) / ma; 

    // 실시간 움직임이 있는 곳
    const yam = setInterval(() => {
      const movingEnemy = document.querySelector(`.count${enemyMovingCount1}`)
      enemyTop1 += iwnatThisTop;
      enemyLeft1 += iwantThisLeft;
      
      
      movingEnemy.style.top = `${enemyTop1}px`;
      movingEnemy.style.left = `${enemyLeft1}px`

      //충돌 함수
      if(checkCollision){
        physicalCollision(enemyTop1, enemyLeft1, up, left);
      }
      
      ma--;
      if(ma === 0){
        clearInterval(yam);
      }
    }, timeMa);

    // enemy1.style.top = `${enemyEnd * (-1) - enemySize}px`
    // enemy1.style.left = `${enemySize}px`;
  }

  // 6초 후에 enemy가 사라지게 만듬
  setTimeout(() => {
    removeEnemy();
  }, timeToRemove);

  return 0;
}

// enemy1 사라지게 만드는 함수
function removeEnemy(){
  const removeTargetEnemy = document.querySelector(`.count${enemyRemoveCount}`);
  enemyRemoveCount++;

  enemyBackground.removeChild(removeTargetEnemy);

  // 한 레벨이 끝났는지 체크
  // 처음 지정해준 enemy의 수만큼 사라졌는지 check
  if(everyEnemy === enemyRemoveCount && characterHP > 0){
    setTimeout(() => {
      console.log(`level${level}이 끝났습니다.`);

      // 레벨 증가 표시
      level++;
      levelContent.textContent = `${level}`;
      setTimeout(() => {
        nextLevel();
      }, 2000);
    }, 2000);
  }
}


// character와 enemy와의 충돌을 구현하기 위한 함수
function physicalCollision(enemyTop1, enemyLeft1, up, left){
  const enemyNowTop = enemyTop1 * (-1);
  const enemyNowLeft = enemyLeft1;
  const characterTop = up * (-1);
  const characterLeft = left;

  // 두 점 사이의 거리
  const distanceX = characterLeft - enemyNowLeft;
  const distanceY = characterTop - enemyNowTop;
  const collisionCheck = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

  // 충돌이 일어났을 때를 체크하는 if구문
  if(collisionCheck > realSize){
    return 0;
  }else{
    console.log('충돌이 일어났습니다.');
    demagedCharacter();
  }
}


// character가 데미지를 받았을 때 css변화와 무적시간을 주는 함수
// HP감소 기능도 갖고 있음
function demagedCharacter(){
  let invincibilityTime = 10; // invincibilityTime * setInterval의 시간 => 무적 시간

  const lookDemaged = setInterval(() => {
    character.classList.toggle('demaged');
    invincibilityTime--;
    if(invincibilityTime === 0){
      clearInterval(lookDemaged);
      character.classList.remove('demaged');
    }
  }, 200);

  // HP 감소와 관련된 UI 기능 반영
  const removeHpBar = document.querySelector(`.HP-bar .hp${characterHP}`);
  hpBar.removeChild(removeHpBar);
  characterHP--;
  

  // hp가 0 되면 gameover를 알림
  if(characterHP === 0){
    hpSection.removeChild(character);
    const gameOver = document.querySelector('.gameOver .game-over');
    gameOver.classList.toggle('active');
  }

  console.log('characterHP : ', characterHP);
  // 충돌이 일어날시 잠시 동안의 무적시간을 주기 위해서 
  checkCollision = false;

  if(characterHP > 0){
    setTimeout(() => {
      checkCollision = true;
    }, 2000);
  }
  

}


// 다음단계를 실행 시키는 함수 + 레벨별로 증가하는 난이도를 가지고 있는 함수
function nextLevel(){
  enemyCount = 0;
  enemyRemoveCount = 0;

  // enemy 속도 밸런스
  movingTime += 5;
  movingTerm -= 0.5;

  // level당 enemy 증가량
  everyEnemy += 5;
  howManyEnemy = everyEnemy;

  // 한개의 enemy 나타나는 시간
  createTime -= 50;

  const dong = setInterval(() => {
    creatEnemy();
    howManyEnemy--;
    if(howManyEnemy === 0){
      clearInterval(dong);
    }
  }, createTime);
}