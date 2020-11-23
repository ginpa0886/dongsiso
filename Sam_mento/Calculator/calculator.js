

const body = document.body;

const button = document.querySelectorAll('.number-area .numbers button')
const operatorButton = document.querySelectorAll('.operator-area button')

const result = document.querySelectorAll('.result-content span');

let check = 0;

button.forEach(v => {
  v.addEventListener('click', function(){
    if(result[0].textContent.length === 0 && v.textContent == 0){
      console.log('첫자리가 0 입니다');
      return;
    }
    result[0].textContent += this.textContent;
    check = 0;
    console.log(v.textContent);
  })
})

operatorButton.forEach(v => {
  v.addEventListener('click', function(){

    if(v == operatorButton[operatorButton.length -1]){
      const wordChange = result[0].textContent.split('');
      wordChange.pop();
      result[0].textContent = wordChange.join('');
      check = 0;
      return;
    }

    if(result[0].textContent.length === 0 || check === 1){
      console.log('아니야');
      return;
    }

    if(check === 0){
      result[0].textContent += this.textContent;
      check = 1;
    }
    // console.log(v);
    // console.log(this, operatorButton);
    // console.log(operatorButton[0]);
  })
})
  

