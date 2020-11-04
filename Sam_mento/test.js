
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
    // console.log(dong);
    // console.log(won);
    dong = dong.filter((num) => won.includes(num));
    dong.reverse();
    answer.push(dong[0]);
    answer.push(dong[0]*parseInt(n/dong[0])*parseInt(m/dong[0]));
    // console.log(filternum[filternum.length-1]);
    
    return answer
}

console.log(happy(3, 12));