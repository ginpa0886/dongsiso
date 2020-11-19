const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

function mapGame(n, arr1, arr2){
  const array1 = [];
  const array2 = [];
  const answer =[];
  for(let i = 0; i < n; i++){
    //일단 arr1, arr2에 값들을 2진법으로 바꿔줌, string 형태가 됨
    array1[i] = arr1[i].toString(2);
    array2[i] = arr2[i].toString(2);
    // 바뀐 값들을 n의 크기만큼의 길이를 가져야 하므로 n보다 길이가 작으면 그만큼 0을 채워줌
    if(array1[i].length < n){
      array1[i] = '0'.repeat(n - array1[i].length) + array1[i];
    }
    if(array2[i].length < n){
      array2[i] = '0'.repeat(n - array2[i].length) + array2[i];
    }
    // 아무것도 없는 상태에서 값을 할당하면 undefined가 되므로 ''라도 넣어줌
    answer.push('');
    //각 arr[i]를 검사함, for문을 통해서 0~n자리수를 확인하면서 둘중에 하나라도 1이 있으면 #을 없으면 ' '을 넣어줌
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