
const body = document.body;
const table = document.createElement('table');
const lines = [];
const kans = [];
const result = document.createElement('div');
let turn = 'x';

const dong = function(event){
  console.log(event.target);  //칸
  console.log(event.target.parentNode);  //줄
  console.log(event.target.parentNode.parentNode);  //테이블

  const whichLine = lines.indexOf(event.target.parentNode);
  console.log(`lines = ${whichLine}`);
  const whichkan = kans[whichLine].indexOf(event.target);
  console.log(`kans = ${whichkan}`);

  if(kans[whichLine][whichkan].textContent === '') { // 칸이 이미 채워져 있는가?
    console.log('빈칸입니다')
    kans[whichLine][whichkan].textContent = turn;

    let full = false;
    // 가로줄 검사
    if(
      kans[whichLine][0].textContent === turn && 
      kans[whichLine][1].textContent === turn && 
      kans[whichLine][2].textContent === turn){
      full = true;
    }

    // 세로줄 검사
    if(
      kans[0][whichkan].textContent === turn && 
      kans[1][whichkan].textContent === turn && 
      kans[2][whichkan].textContent === turn){
      full = true
    }

    // 대각선 검사1 왼-> 오른쪽 아래
    if(whichLine - whichkan === 0){ // 대각선 검사 필요한 경우  
      if(
        kans[0][0].textContent === turn &&
        kans[1][1].textContent === turn &&
        kans[2][2].textContent === turn 
        ){
          full = true;
      }
    }
    // 대각선 검사 오른쪽에서 왼쪽 아래로 

    if(Math.abs(whichkan - whichLine) === 2){
      if(
        kans[0][2].textContent === turn &&
        kans[1][1].textContent === turn &&
        kans[2][0].textContent === turn
      )
      full = true;
    }

    // 다 찼으면
    if(full){
      result.textContent = `${turn}님이 이기셨습니다.`;
      //초기화 
      turn = 'x'

      kans.forEach(function (line) {
        line.forEach(function (kan){
          kan.textContent = '';
        })
      });
    }
    if(turn === 'x'){
      turn = 'O';
    }else{
      turn = 'x';
    }

  }else{
    console.log('빈칸이 아닙니다.')
  }
};

for(let i = 1; i <=3; i++){
  const line = document.createElement('tr');
  lines.push(line);
  kans.push([]);
  for(let h = 1; h <= 3; h++){
    const kan = document.createElement('td');
    kan.addEventListener('click', dong);
    kans[i - 1].push(kan);
    line.appendChild(kan)
  }
  table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);
console.log(lines, kans);