

const button = document.querySelectorAll('.number-area .numbers button')
const operatorButton = document.querySelectorAll('.operator-area button')

// 현재 적고 있는 곳
const result = document.querySelectorAll('.result-content strong');

//식이 적히는 곳
const resultMap = document.querySelectorAll('.result-content span')[0];

const resultBody = document.querySelectorAll('.result-area')[0];
let checkSystem = 0;
result[0].textContent = 0;


// forEach문을 통해서 .operator-area button들에 addEventListener을 넣어줌
button.forEach((v, i) => {

  // button에 AC와 =에 해당하는 index의 button에 각기 다른 이벤트리스너를 넣어 주었음
  if(i === button.length - 3 || i === button.length -1){

    // AC일때, 
    if(i === button.length - 3){
      v.addEventListener('click', function(){
        resultMap.textContent = '';
        result[0].textContent = 0;
      })

    // = 일때
    }else{
      v.addEventListener('click', function(){

        // 클릭이 될때 마다, result라는 클래스 이름을 가진, div를 생성함
        // 그 안에 span과 strong을 생성하여 담음
        const stackResult = document.createElement('div');
        stackResult.className = "result";
        const stackspan = document.createElement('span');
        const stackstrong = document.createElement('strong');


        // span에는 진행되었던 식과 현재 눌려 있는 값들을 저장해줌
        // strong에는 = 이 담기게 만듬
        stackspan.textContent = resultMap.textContent + result[0].textContent;
        stackstrong.textContent = this.textContent;

        // 불러왔던, result-area에 div(stackResult)를 담고
        // 그 div(stackResult)안에 span과 strong을 담음
        resultBody.append(stackResult);
        stackResult.append(stackspan);
        stackResult.append(stackstrong);

        // 그리고 현재 사용하고 있는 값에 대해서는 빈값과 0을 넣어주어서 초기화 해줌
        resultMap.textContent = '';
        result[0].textContent = 0;
      })
    }
    
  // button중에 숫자일 때
  }else{
    v.addEventListener('click', function(){
      if(checkSystem === 0){

        // 현재 계산창에 있는 result와 resultMap에 각각을 배열화 시키고, 가장 마지막에 있는 배열의 값이 무엇인지 정의 해놓음
        // 클릭 할때 마다
        const check = result[0].textContent.split('');
        const lastword = check[check.length - 1];
        const mapCheck = resultMap.textContent.split('');
        const mapLastword = mapCheck[mapCheck.length -1];
  

        // 식이 적혀져 있는 곳에 값이 존재하고 => resultMap.textContent.length가 0이 아니라면
        // 식이 적혀져 있는 곳에 제일 마지막 배열 값이 연산자가 아닐 경우 => 숫자일 경우에
        // 연산자 부터 입력할 수 있게 끔 만든 if문
        if(resultMap.textContent.length !== 0 && !(mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/')){
          result[0].textContent = '연산자부터 입력해주세요!'
  
          setTimeout(function(){
            result[0].textContent = 0;
          }, 1000);
          return;
        }
  

        // 현재 적고 있는 값의 가장 마지막 배열 값이 0이면서, 길이가 1인 경우 => 0만 적혀 있는 경우
        if(lastword == 0 && result[0].textContent.length === 1){
          // 현재 적고 있는 값 자체가 바로 이벤트가 발생한 버튼의 textContent값으로 변동되게 만듬
          // 이유는 처음에 0이라는 값으로 선정해 놓았으므로, 숫자를 누르는 순간 0 -> 누른 숫자로 바뀌게 만들기 위해서
          result[0].textContent = v.textContent;
          return;
        }

        // 나머지 경우는 바로 숫자가 현재 적고 있는 값에 담김
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
    // 조건으로는 현재 적고 있는 값이 0이고, 길이가 1이며, 식이 적히는 곳에 값이 없다는 조건
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
    


    
    if(checkSystem === 0){

      // 연산자 중에 가장 마지막 연산자인 backspace가 눌리면 if문에 걸리고 나머지 연산자가 눌릴시에는 모두 else로 빠짐
      if(v == operatorButton[operatorButton.length -1]){


        // backspance가 눌리면 배열(check)의 가장 마지막 값을 pop으로 지우고 나머지 배열에 있는 값을 join으로 string화 시켜줌
        // 조건으로는 현재 적고 있는 곳의 값이 0일 경우에 식이 적히는 곳에 값이 지워지게 만듬
        if(result[0].textContent === '0'){
          mapCheck.pop();
          resultMap.textContent = mapCheck.join('');


        // 나머지 경우에 실행되는 곳(bakcspace)
        }else{
          check.pop();
          result[0].textContent = check.join('');

          // 만약 backspace로 지우다가 현재 적는 곳에 값이 아무것도 남지 않는다면
          // 현재 적는 곳에 0이라는 값을 줌
          if(result[0].textContent.length === 0){
            result[0].textContent = 0;
          }
        }
        



      // backspace가 아닌 나머지 연산자가 눌릴 시 진행되는 else문
      // +, -, *, / 가 실행되는 곳
      }else{


        // 식이 적히는 곳에 가장 마지막 배열 값이 연산자일 경우와 현재 적고 있는 곳의 값이 0인 경우
        // 이럴때 연산자를 누르면 식이 적히는 곳에 제일 마지막 배열값인 연산자가 바뀌게 만듬
        if((mapLastword == '+' || mapLastword == '-' || mapLastword == '*' || mapLastword == '/') && result[0].textContent == 0){
          // 배열에 가장 마지막 값을 pop을 통해서 지운 후
          mapCheck.pop();
          // 현재 눌린 v.textContent값을 마지막에 넣어줌
          mapCheck.push(v.textContent);
          resultMap.textContent = mapCheck.join('');




        }else{
          // 나머지 경우들에 해당되지 않는 모든 것들은 입력 받은 값의 textContent를 원래 값에 넣어줌
          // 연산자와 현재 값이 적혀 있는 곳의 textContent를 더해서 식이 적혀 있는 곳에 값을 할당하고
          // 현재 적고 있는 곳에 값은 0으로 바꿔줌
          resultMap.textContent += result[0].textContent + this.textContent;
          result[0].textContent = 0; 
          
        }
      }
    }
  })
})
  

// 추가적으로 할 사항들은 계산기 중위표기식과 후위표기식 구현하기가 있음
// 기본적으로 대중화 되어 있는 코드들이 있지만, 혼자 스스로 만들어 보는 것을 추천함
// 



// 식이 적히는 곳에 값은 있지만, 현재 적는 곳에 값이 없을 때 
          // if(result[0].textContent == 0){
          //   if(resultMap.textContnet.length !== 0){
          //     resultMap.textContent += this.textContent;
          //   }