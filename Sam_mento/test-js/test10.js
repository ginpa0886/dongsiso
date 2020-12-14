const solution = s => s.split('').filter(n =>  n === ('p' || 'P')).length === s.split('').filter(n =>  n === ('y' || 'Y')).length ? true : false;
console.log(solution("pPoooyY"));