// for(let i = 9; i >= 1; i -= 2){
//     console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
// }

for(let i = -2; i <= 2; i++){
    console.log(' '.repeat(Math.abs(i)) + '*'.repeat(5 + (Math.abs(i)*(-2))));
}