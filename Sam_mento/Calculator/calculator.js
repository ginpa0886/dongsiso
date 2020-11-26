

const button = document.querySelectorAll('.number-area .numbers button')
const operatorButton = document.querySelectorAll('.operator-area button')
const result = document.querySelectorAll('.result-content strong');
const resultMap = document.querySelectorAll('.result-content span')[0];

const resultBody = document.querySelectorAll('.result-area')[0];
let checkSystem = 0;




result[0].textContent = 0;


// forEach문을 통해서 .operator-area button들에 addEventListener을 넣어줌
button.forEach((v, i) => {
  if(i === button.length - 3 || i === button.length -1){
    if(i === button.length - 3){
      v.addEventListener('click', function(){
        resultMap.textContent = '';
        result[0].textContent = 0;
        // const forRemove = document.querySelectorAll('result-are .result')
        // resultBody.removeChild(forRemove);
      })
    }else{
      v.addEventListener('click', function(){
        if(result[0].textContent !== '0'){
          const stackResult = document.createElement('div');
          stackResult.className = "result";
          const stackspan = document.createElement('span');
          const stackstrong = document.createElement('strong');

          stackspan.textContent = resultMap.textContent + result[0].textContent;
          stackstrong.textContent = this.textContent;
          
          resultBody.append(stackResult);
          stackResult.append(stackspan);
          stackResult.append(stackstrong);
          // resultMap.textContent += result[0].textContent + this.textContent;
          resultMap.textContent = '';
          result[0].textContent = 0;
        }
      })
    }
    
  }else{
    v.addEventListener('click', function(){
      if(checkSystem === 0){
        const check = result[0].textContent.split('');
        const lastword = check[check.length - 1];
        const mapCheck = resultMap.textContent.split('');
        const mapLastword = mapCheck[mapCheck.length -1];
  
        if(resultMap.textContent.length !== 0 && !(mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/')){
          result[0].textContent = '연산자부터 입력해주세요!'
  
          setTimeout(function(){
            result[0].textContent = 0;
          }, 1000);
          return;
        }
  
        if(lastword == 0 && result[0].textContent.length === 1){
          result[0].textContent = v.textContent;
          console.log('여긴가');
          return;
        }

        result[0].textContent += this.textContent;
      }
    })
  }
})



operatorButton.forEach(v => {
  v.addEventListener('click', function(){
    // 클릭이 눌릴 때 마다, span에 있는 textContent를 배열(check)로 만듬
    // 배열(check)에 가장 마지막 값을 lastword로 지정해 놓음
    const check = result[0].textContent.split('');
    const lastword = check[check.length - 1];
    const mapCheck = resultMap.textContent.split('');
    const mapLastword = mapCheck[mapCheck.length -1];
    // 아무것도 적혀있지 않은 상태에서 입력이 되지 않게 만들고, ! 가 입력되었다가 2초 뒤에 사라지게 만듬
    if(result[0].textContent.length === 1 && lastword == 0 && resultMap.textContent === null){
      result[0].textContent ='!'
      checkSystem++;
      // function이 몇초 뒤에 실행될지 설정 하는 것
      setTimeout(function(){
        result[0].textContent = '0';
        checkSystem = 0;
      }, 2000)
      return;
    }
    
    // 연산자 중에 가장 마지막 연산자인 backspace가 눌리면 if문에 걸리고 나머지 연산자가 눌릴시에는 모두 else로 빠짐
    if(checkSystem === 0){
      if(v == operatorButton[operatorButton.length -1]){
        // backspance가 눌리면 배열(check)의 가장 마지막 값을 pop으로 지우고 나머지 배열에 있는 값을 join으로 string화 시켜줌
        if(result[0].textContent === '0'){
          mapCheck.pop();
          resultMap.textContent = mapCheck.join('');
          console.log('현재 값이 없을 때')
        }else{
          check.pop();
          result[0].textContent = check.join('');
          if(result[0].textContent.length === 0){
            result[0].textContent = 0;
          }
          console.log('그냥 백스페이스가 눌렸을 때')
        }
        
      }else{
        // 배열(check)에 가장 마지막 값인 lastword가 만약 연산자일 경우
        if((mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/') && result[0].textContent == 0){
          // 배열에 가장 마지막 값을 pop을 통해서 지운 후
          mapCheck.pop();
          console.log(result[0].textContent);
          // 현재 눌린 v.textContent값을 마지막에 넣어줌
          mapCheck.push(v.textContent);
          resultMap.textContent = mapCheck.join('');
          console.log('연산자가 종합물에 끝에 있는데 연산자가 눌렸을 때');

        }else{
          // 나머지 경우들에 해당되지 않는 모든 것들은 입력 받은 값의 textContent를 원래 값에 넣어줌

          if(result[0].textContent == 0){
            if(resultMap.textContnet.length !== 0){
              resultMap.textContent += this.textContent;
              console.log('찍어');
            }
          }else{
            console.log('보통 연산자가 눌렸을 때')
            resultMap.textContent += result[0].textContent + this.textContent;
            result[0].textContent = 0;
          }
        }
      }
    }

  })
})
  

