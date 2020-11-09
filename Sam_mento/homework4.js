


const reserve = [1,3,5];
const lost = [2,4];

function steal(n,lost, reserve) {
    // let answer =0;
    let arr = [];
    // let count = 0;
    for(let i = 0; i<n; i++){
            arr.push(1);
    }

    for(let i = 0; i<reserve.length; i++){
        arr[reserve[i]-1]++;
    }

    for(let i = 0; i<lost.length; i++){
        arr[lost[i]-1]--;
    }

    for(let i = 1; i<arr.length; i++){
        if(arr[i-1] === 0 && arr[i] === 2){
            arr[i-1]++;
            arr[i]--;
        }
        // else if(arr[0] === 2 && arr[i] === 0 && arr[i+1] !== 2){
        //     arr[0]--;
        //     arr[i]++;
        // }
        else if(arr[i-1] === 2 && arr[i] === 0) {
            arr[i-1]--;
            arr[i]++;
        }
    }

    // for(let i = 0; i<arr.length; i++){
    //     if(arr[i] !== 0){
    //         count++;
    //     }
    // }

   arr = arr.filter( n => n > 0);



    return arr.length;

}





console.log(steal(5,lost, reserve));





////위대하군요
// function solution(n, lost, reserve) {      
//     return n - lost.filter(a => {
//         const b = reserve.find(r => Math.abs(r-a) <= 1)
//         if(!b) return true
//         reserve = reserve.filter(r => r !== b)
//     }).length
// }