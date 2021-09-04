function arrayTotal( numbers){
    var sum  =0;
    for( var i=0; i< numbers.length;i++){
        var element =numbers[i];
        sum= element + sum;
    }
    return sum;
}
var number =[ 34,24,234,21,234,5,34,345];
var total = arrayTotal(number);
console.log(total);


// var numbers =[ 50,30,20,40];
// var multification=1;
// for( var i=0; i< numbers.length;i++){
//     var element = numbers[i];
//     multification = element * multification;
// }
// console.log(multification);

function multiArray ( numbers){
    var multification=1;
    for( var i=0 ; i< numbers.length ; i++){
        var element = numbers[i];
        multification =  element * multification;
    }
    return multification;
}
 var answer = multiArray( 10,20,30,40);
 console.log(answer);