
const arr = ["abce", "abcd", "cdx"];

function checkString(arr, n){
    let answer = [];
    let length = arr.length;
    for(let i = 0; i < length; i++){
        // answer[i] = arr[i].charAt(n);
        for(let h = 0; h < arr[i].length - n; h++){
            if( h === 0 ){
                answer[i] = arr[i].charAt(n);
            }else{
                answer[i] += arr[i].charAt(n + h);
            }
        }
    }
    answer.sort();
    for( let i = 0; i < length; i++){
        for( let h = 0; h < subanswer[i].length; h++){
            if( answer[i] === arr[h].charAt(n)) {
                answer[i] = arr[h];
            }
        }
    }
    return answer;
}


console.log(checkString(arr, 2));
console.log(arr);