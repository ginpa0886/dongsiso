
const arr = ["abce", "abcd", "cdx"];

// fucntion test(arr, n){
//     let answer = [];
//     for(let i =0; i< arr.length; i++){
        
//     }
// }


function checkString(arr, n){
    let answer = [];
    let dong = [];
    let length = arr.length;
    for(let i = 0; i < length; i++){
        // answer[i] = arr[i].charAt(n);
        for(let h = 0; h < arr[i].length - n; h++){
            if( h === 0 ){
                answer[i] = arr[i].charAt(n);
                dong[i] = arr[i].charAt(n);
            }else{
                answer[i] += arr[i].charAt(n + h);
                dong[i] += arr[i].charAt(n + h);
            }
        }
    }
    answer.sort();
    for( let i = 0; i < length; i++){
        for( let h = 0; h < dong.length; h++){
            if( answer[i] === dong[h]) {
                answer[i] = arr[h];
            }
        }
    }
    return answer;
}


console.log(checkString(arr, 2));