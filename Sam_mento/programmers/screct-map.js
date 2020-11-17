const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function mapGame(n, arr1, arr2){
  const array1 = [];
  const array2 = [];
  const answer =[];
  for(let i = 0; i < n; i++){
    array1[i] = arr1[i].toString(2);
    array2[i] = arr2[i].toString(2);
    if(array1[i].length < n){
      array1[i] = '0'.repeat(n - array1[i].length) + array1[i];
    }
    if(array2[i].length < n){
      array2[i] = '0'.repeat(n - array2[i].length) + array2[i];
    }
    answer.push('');
    for(let h = 0; h < n; h++){
      if(`${array1[i]}`.charAt(h) === '1' || `${array2[i]}`.charAt(h) === '1'){
        console.log(`i = ${i}, h = ${h}`);
        answer[i] += '#';
      }else{
        answer[i] += ' ';
      }
    }
  }
  // console.log(`${array1[0]}`.charAt(0));
  // console.log(`${array2[0]}`.charAt(0));
  // console.log(array1);
  // console.log(array2);
  return answer;
}

console.log(mapGame(n, arr1, arr2));