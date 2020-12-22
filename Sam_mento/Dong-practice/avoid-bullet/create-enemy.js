const enemyBackground = document.querySelector('.background-enemy');




// enemy class에 붙는 번호로, 적의 개수를 파악하기 위해 만든 변수
let enemyCount = 0;

// 랜덤 위치를 만들기 위해서 width와 height의 비율을 정리한 변수
const widthRate = Number(body.offsetWidth); // 가로의 100% 값
const heightRate = Number(body.offsetHeight); // 세로의 100% 값

// console.log(body.offsetHeight);

let a = 5;
// 1초마다 적을 생성시키는 함수
const dong = setInterval(() => {
  creatEnemy();
  a--;
  if(a === 0){
    clearInterval(dong);
  }
}, 5000);



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

  const enemyHead = setLotation(createlotation);

  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  enemy.classList.add(`count${enemyCount}`);
  enemyCount++;
  enemyBackground.append(enemy);

  // 랜덤한 가로 혹은 세로의 값을 구함.
  const locationWidth = createRandomLocation * widthRate/10;
  const locationHeight = createRandomLocation * heightRate/10;

  // 방향에 따른 생성
  if(enemyHead === 'top'){
    enemy.style.left = `${locationWidth}px`;
    enemy.style.top = '0px'
  }
  if(enemyHead === 'bottom'){
    enemy.style.left = `${locationWidth}px`;
    enemy.style.bottom = '0px';
  }
  if(enemyHead === 'left'){
    enemy.style.top = `${locationHeight}px`;
    enemy.style.left = '0px';
  }
  if(enemyHead === 'right'){
    enemy.style.top = `${locationHeight}px`;
    enemy.style.right = '0px';
  }

  // 반대편으로 움직이게 함수 실행
  setTimeout(() => {
    attackCharacter(locationWidth, locationHeight, enemyHead, enemy);
  }, 1000);
  
  return 0;

}

// 적이 character에게 날라가도록 하는 함수
function attackCharacter(locationWidth, locationHeight, enemyHead, enemy){
  // 확인 완료
  // ================= character , enemy 좌표 완료 -----------------------------
  // character X 좌표
  const charWidht = left;
  // character Y 좌표
  const charHeigth = (-1) * up;
  
  // enemy X 좌표
  let enemyWidth = 0;
  // enemy Y 좌표 
  let enemyHeight = 0;

  // 숫자로만 대입
  if(enemyHead === 'top'){
    enemyWidth = locationWidth;
    enemyHeight = 0;
  }
  if(enemyHead === 'bottom'){
    enemyWidth = locationWidth;
    enemyHeight = heightRate * (-1); // top 기준으로 되어있기 때문에 -1을 곱해줌
  }
  if(enemyHead === 'left'){
    enemyWidth = 0;
    enemyHeight = locationHeight*(-1);
  }
  if(enemyHead === 'right'){
    enemyWidth = widthRate;
    enemyHeight = locationHeight*(-1);
  }
  console.log("charWidht : ", charWidht, 'charHeigth : ', charHeigth);
// ----------------------------------------------------------------------------

 
  // enemy와 character간의 기울기
  const inclination = (charHeigth - enemyHeight) / (charWidht - enemyWidth);
  console.log('enemyHeight : ', enemyHeight, 'enemyWidth : ', enemyWidth);
  console.log('inclination : ', inclination);

  // y절편 구하기
  const Xzero = enemyHeight - (inclination * charWidht);
  console.log('Xzero :', Xzero);
  // 직선의 방정식은 =>  y = inclination*x + Xzero
  // 각 생성되는 지역마다 다르게 넣어줄 변수 하나 생성.
  let enemyEnd = 0;

  // 상하 직선으로 나가게 하는 곳
  // X 값 구하는 곳
  if(enemyHead === 'top'){
    console.log('top 실행');
    enemyEnd = (heightRate - Xzero) / inclination;
    enemy.style.top = `${enemyHeight * (-1)}px`
    enemy.style.left = `${enemyEnd}px`;
  }
  if(enemyHead === 'bottom'){
    console.log('bottom 실행');
    enemyEnd = (-1) * (Xzero / inclination);
    enemy.style.top = `0px`
    enemy.style.left = `${enemyEnd}px`;
  }

  // 좌우 직선으로 나가게 하는 곳
  // Y 값 구하는 곳
  if(enemyHead === 'left'){
    console.log('left 실행');
    enemyEnd = (inclination * widthRate) + Xzero;
    enemy.style.top = `${enemyEnd * (-1)}px`
    enemy.style.left = `${widthRate}px`;
  }
  if(enemyHead === 'right'){
    console.log('right 실행');
    enemyEnd = Xzero;
    enemy.style.top = `${Xzero * (-1)}px`
    enemy.style.left = `0px`;
  }
  console.log('enemyEnd :', enemyEnd);
  console.log('-------------------------------');
  return 0;
}

