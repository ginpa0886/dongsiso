let a = 5;
let b = 24;


function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const week = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let year = [];
    let num = 0;
    let moon = 0;
    for(let i = 0; i < month.length; i++){
      let months = [];
        for(let h = moon; h < month[i] + moon; h++){
            months.push(week[h % 7]);
            num = h % 7;
        }
        num++;
        moon = num;
        year.push(months);
    } 
    return year[a-1][b-1];
}

console.log(solution(a,b));
