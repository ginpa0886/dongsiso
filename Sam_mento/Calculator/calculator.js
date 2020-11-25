

const button = document.querySelectorAll('.number-area .numbers button')
const operatorButton = document.querySelectorAll('.operator-area button')
const result = document.querySelectorAll('.result-content span');

// forEach문을 통해서 .operator-area button들에 addEventListener을 넣어줌
button.forEach(v => {
  v.addEventListener('click', function(){
    const check = result[0].textContent.split('');
    const lastword = check[check.length - 1];

    if(result[0].textContent.length === 0 && v.textContent == 0){
      console.log('첫자리가 0 입니다');
      return;
    }

    if(v.textContent == 0 && (lastword == '+' || lastword == '-' || lastword == '*' || lastword == '/')){
      return;
    }

    result[0].textContent += this.textContent;
  })
})



operatorButton.forEach(v => {
  v.addEventListener('click', function(){
    // 클릭이 눌릴 때 마다, span에 있는 textContent를 배열(check)로 만듬
    // 배열(check)에 가장 마지막 값을 lastword로 지정해 놓음
    const check = result[0].textContent.split('');
    const lastword = check[check.length - 1];

    // 아무것도 적혀있지 않은 상태에서 입력이 되지 않게 만들고, ! 가 입력되었다가 2초 뒤에 사라지게 만듬
    if(result[0].textContent.length === 0){
      result[0].textContent ='!'
      // function이 몇초 뒤에 실행될지 설정 하는 것
      setTimeout(function(){
        result[0].textContent = '';
      }, 2000)
      return;
    }
    
    // 연산자 중에 가장 마지막 연산자인 backspace가 눌리면 if문에 걸리고 나머지 연산자가 눌릴시에는 모두 else로 빠짐
    if(v == operatorButton[operatorButton.length -1]){
      // backspance가 눌리면 배열(check)의 가장 마지막 값을 pop으로 지우고 나머지 배열에 있는 값을 join으로 string화 시켜줌
      check.pop();
      result[0].textContent = check.join('');
    }else{
      // 배열(check)에 가장 마지막 값인 lastword가 만약 연산자일 경우
      if(lastword == '+' || lastword == '-' || lastword == '*' || lastword == '/'){
        // 배열에 가장 마지막 값을 pop을 통해서 지운 후
        check.pop();
        // 현재 눌린 v.textContent값을 마지막에 넣어줌
        check.push(v.textContent);
        result[0].textContent = check.join('');
      }else{
        // 나머지 경우들에 해당되지 않는 모든 것들은 입력 받은 값의 textContent를 원래 값에 넣어줌
        result[0].textContent += this.textContent;
      }
    }
  })
})
  

