

const s = "a y";
const n = 5;

function happy(s, n){
  const dong = s.split('');
  const answer = [];
  for(let i = 0; i < s.length; i++){
    // if(dong[i].charCodeAt(0) >= 65 && dong[i].charCodeAt(0) <= 90){
      if(dong[i].charCodeAt(0) + n > 90){
        answer.push(String.fromCharCode(64 + dong[i].charCodeAt(0) + n - 90))
      }
      else if(dong[i].charCodeAt(0) + n > 122){
        answer.push(String.fromCharCode(96 + dong[i].charCodeAt(0) + n - 122));
      }
      else if(dong[i].charCodeAt(0) === 32){
        answer.push(dong[i]);
      }else{
        answer.push(String.fromCharCode(dong[i].charCodeAt(0) + n));
      }
  }    
    // }else if(dong[i].charCodeAt(0) >= 97 && dong[i].charCodeAt(0) <= 122){
    //   if(dong[i].charCodeAt(0) + n > 122){
    //     answer.push(String.fromCharCode(96 + dong[i].charCodeAt(0) + n - 122));
    //   }else{
    //     answer.push(String.fromCharCode(dong[i].charCodeAt(0) + n));
    //   }
      
    
  
  return answer.join('');
}

console.log(happy(s, n));