


let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];

function solution(participant, completion){
    let answer = [];
    for(let i = 0; i<completion.length; i++){
        answer = participant.filter(completion => completion.indexOf(completion[i]));
    }




    return answer;
}

console.log(solution(participant, completion));
