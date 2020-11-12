let parti = ["mislav", "stanko", "mislav", "ana"];
let comple = ["stanko", "ana", "mislav"];

function solution(parti, comple){
    parti.sort();
    comple.sort();
    console.log(parti);
    console.log(comple);
    let answer = parti.filter((n,i) =>
        !(n === comple[i])
    )
    console.log(answer);

    return answer[0];
}

console.log(solution(parti, comple));