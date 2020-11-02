const arr = ["bbcd", "abcd", "cdx"];

function solution(arr, n) {
    let answer = [];
    let num = 0;
    let length = arr.length;
    
    for(let i = 0; i< length; i++){
        // for(let h = 0; h < arr[i].length-n; h++){
            if( n !== 0 ){
                answer[i] = arr[i].substring(n, arr[i].length) + i;
                
            }else{
                answer[i] = arr[i];
            }
                // answer[i] = arr[i].charAt(n);
                // dong[i] = arr[i].charAt(n);
            // }else{
            //     answer[i] += arr[i].charAt(n + h);
            //     dong[i] += arr[i].charAt(n + h);
            // }
        // }
    }
    answer.sort();
    
    for(let i = 0; i < length; i++){
        for(let h = 0; h < length; h++){
            if(answer[i].substring(answer[i].length -1) === arr[h].substring(n, arr[h].length-1)){
                
            }else{
                answer[i] = arr[answer[i].charAt(answer[i].length-1)]; 
            }
        }
            
    }
    return answer;
}

console.log(solution(arr,1));