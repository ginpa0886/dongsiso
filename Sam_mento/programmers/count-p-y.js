let s = "Pyy";


const solution = s => s.filter



function solution(s){
  let count1 = 0;
  let count2 = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === 'p' || s[i] === 'P'){
      count1++;
    }else if(s[i] === 'y' || s[i] === 'Y'){
      count2++;
    }
  }
}
  console.log(`${count1}과 ${count2}`);
  
  // let answer = (count1 == count2) ? true : false;