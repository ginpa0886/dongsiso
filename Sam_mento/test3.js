let arr = 2973;


function rex(arr){
    let answer = [];
    let num = 0;
    for(let i =3; i>=0; i--){
            if( i === 3){
                answer[i] = parseInt(arr/Math.pow(10, i))*Math.pow(10, i);
                num = arr%Math.pow(10, i);
            }else{
                answer[i] = parseInt(num/Math.pow(10, i))*Math.pow(10, i);
                num = arr%Math.pow(10, i);
            }
    }
    
    return answer;
}

console.log(parseInt(arr/Math.pow(10, 3)))
console.log(rex(arr));