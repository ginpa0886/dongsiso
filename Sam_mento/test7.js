let a = 5;
let b = 24;


function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const week = [TUE,WED,THU,FRI,SAT,SUN,MON];
    const year = [];
    for(let i = 0; i < month.length; i++){
        for(let h = 1; h <= month[i]; h++){
            year.push(week[h % 7])
        }
    } 
    
    return answer;
}

console.log(solution(a,b));