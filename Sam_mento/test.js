
function happy(n, m){
    let answer = [];
    let dong = [];
    let won = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            dong.push(i);
        }
    }

    for(let i = 1; i <= m; i++){
        if(m % i === 0){
            won.push(i);
        }
    }

    for(let i = 0; i < dong.length; i++){
        for(let h = 0; h < won.length; h++){
            if(dong[i] === won[h]){
                answer.push(dong[i]);
            }
        }
    }
    
    answer.reverse();
    if(answer[0] === 1){
        answer[1] = n*m;
    }
    return answer;
}

console.log(happy(2,5));