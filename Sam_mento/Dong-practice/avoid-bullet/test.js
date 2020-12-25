const dong = 'dong';
let a = 5;
const won = setInterval(() => {
  console.log(dong);
  a--;
  if(a === 0){
    clearInterval(won);
  }
}, 10);

