
const arr = [4,3,2,3,4,3,2,1,1,3,4,1];

function happy(arr){
  let min = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  arr = arr.filter(n => n !== min);
  if(arr.length === 0 ){
    arr.push(-1);
  }

  return arr;
}

console.log(happy(arr));

// Math.min을 이용한 풀이

function dong(arr){
  let min = Math.min(...arr);
  arr = arr.filter(n => n !== min);
  arr.length === 0 ? arr.push(-1) : arr;
  return arr;
}

console.log(dong(arr));