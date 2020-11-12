

let answers = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];

function solution(answers) {
    const answer = [];
    const dong = [1, 2, 3, 4, 5];
    const yeol = [2, 1, 2, 3, 2, 4, 2, 5];
    const quokka = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(i = 0; i < answers.length; i++) {
        if(dong.length > answers.length) {
            break;
        }
        if(dong.length < answers.length) {
            dong.push(dong[i]);
            yeol.push(yeol[i]);
            quokka.push(quokka[i]);
        }
    }

    console.log(dong);
    console.log(yeol);
    console.log(quokka);
     
}
console.log(solution(answers));