
const { odd, even } = require('./var');

function checkOddOrEven(num){
  if(num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;

// ES2015버전으로 바꾼 것

// import { odd, even } from './var';

// function checkOddOrEven(num) {
//   if(num % 2) {
//     return odd;
//   }
//   return even;
// }

// export default checkOddOrEven;