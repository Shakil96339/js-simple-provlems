var fibo =[ 0,1];
for( var i= 2; i<=10; i++) {
  fibo [i]  = fibo[i-1] + fibo[i-2];
   
}
console.log(fibo);
  
// fiboncci value added

var fibo =[0,1];
for( var i=2; i<=8; i++){
    fibo [i] = fibo[i -1] + fibo[ i-2]
}
console.log(fibo);

function fiboSeries(num){
    var fibo=[0,1];
    for( var i= 2; i <=num; i++){
        fibo[i] = fibo[ i-1] + fibo [ i-2];

    }
    return fibo;
}
 var answer = fiboSeries(13);
 console.log(answer);

// agaiin exaample

function getFibo(number ){
let fibo =[ 0,1];
for( let i=2; i<= number; i++){
    fibo[i]= fibo[i-1] + fibo[i-2]

}
    return fibo;
}

let answer= getFibo(2);
console.log(answer);