const dong = ["asd", "fgh", "jkl"];

dong[0] = dong[0] + dong[1];

function test(arr, n){
    let won = [];
    for(let i = 0; i < 1; i++){
        for(let h = 0; h < arr[i].length - n; h++){
            if( h === 0 ){
                won[i] = dong[0].charAt(n);
            }else{
                won[i] += dong[0].charAt(n + h);
            }
        }
    }
    return won;
}



console.log(dong[0]);
console.log(test(dong, 1));