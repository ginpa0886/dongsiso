let n = 45;

function tenten(n){
    let answer = 0;
    let num = 0;
    for(let i =16; i >= 0; i--){
        if(i === 16){
            answer += parseInt(n/Math.pow(3, i))*Math.pow(10, i);
            num = n%Math.pow(3, i)
            // console.log(answer);
            // console.log(num);
        }else{
            answer += parseInt(num/Math.pow(3, i))*Math.pow(10, i);
            num = num%Math.pow(3, i)
        }
    }

    

    // function rev(answer){
    //     let reversed = answer
    //     .toString()
    //     .split("")
    //     .reverse()
    //     .join("");
    
    //     return reversed;
    // }

    // for(let i = 16; i <0; i--){
    //     if(i === 16){
    //         answer += parseInt(n/Math.pow(10, i))*Math.pow(10, i);
    //         num = n%Math.pow(10, i)
    //         // console.log(answer);
    //         // console.log(num);
    //     }else{
    //         answer += parseInt(num/Math.pow(10, i))*Math.pow(10, i);
    //         num = num%Math.pow(10, i)
    //     }
    // }
    


    // for(let i =0; i<)
    // charAt(i)
    

    return answer;
}
let v = 1250;
v.toString("");
// v.toString().length;

function rev(n){
    let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

    return reversed;
}

console.log(rev(v));
console.log(v);
console.log(tenten(n));




