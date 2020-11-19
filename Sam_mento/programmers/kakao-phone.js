const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";


function phone(numbers, hand){
  const answer = [];
  const map = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 0, 11]];
  let loc1 = [3,0];
  let loc2 = [3,2];
  for(let i = 0; i < numbers.length; i++){
    for(let h = 0; h < 4; h++){
        if(map[h][0] === numbers[i]){
          answer.push('L');
          console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다1`);
          loc1[0] = h;
          loc1[1] = 0;
          break;
        }else if (map[h][2] === numbers[i] ){
          answer.push('R');
          console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다2`);
          loc2[0] = h;
          loc2[1] = 2;
          break;
        }else{
            if(map[h][1] === numbers[i]){
              if(Math.abs(loc1[0] - h) + Math.abs(loc1[1]-1) > Math.abs(loc2[0] - h) + Math.abs(loc2[1]-1)){
                answer.push('R');
                console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다3`);
                loc2[0] = h;
                loc2[1] = 1;
                break;
              }else if(Math.abs(loc1[0] - h) + Math.abs(loc1[1] - 1) < Math.abs(loc2[0] - h) + Math.abs(loc2[1] - 1)){
                answer.push('L');
                console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다4`);
                // if(i === 8){
                //   console.log(Math.abs(loc1[0] - h));
                //   console.log(Math.abs(loc1[1]-1));
                //   console.log(Math.abs(loc2[0] - h));
                //   console.log(Math.abs(loc2[1]-1));
                // }
                loc1[0] = h;
                loc1[1] = 1;
                break;
              }else if(Math.abs(loc1[0] - h) + Math.abs(loc1[1]-1) === Math.abs(loc2[0] - h) + Math.abs(loc2[1]-1)){
                if(hand === 'right'){
                  answer.push('R');
                  console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다5`);
                  loc2[0] = h;
                  loc2[1] = 1;
                  break;
                }else if(hand === 'left'){
                  answer.push('L');
                  console.log(`i = ${i}, h = ${h} loc1 = ${loc1}, loc2 = ${loc2}, answer = ${answer}, number[i] = ${numbers[i]} 이다6`);
                  loc1[0] = h;
                  loc1[1] = 1;
                  break;
                }
              }
            }
        }
    }
  }

return answer.join('');
}

console.log(phone(numbers,hand));