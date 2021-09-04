//find largest number

function getlargest(numbers){
    var largest = 0;
    for( var i=0; i<numbers.length;i++){
        var elements =numbers[i];
        if( elements > largest){
            largest=elements;
        }
        
    }
    return largest;
}

var ages =[32,34,23,45,67,34,45,85,43,32,21];
var largest =getlargest(ages);
console.log(largest);



////find largest number

function getlargest (numbers){
    var largest =0;
    for( var i=0; i< numbers.length; i++){
        var elements = numbers[i];
    if( elements > largest){
        largest = elements;
    }

    }
    return largest;
}

var ages =[53,53,32,75,43,34,723,77,87,56,14];
var answer = getlargest (ages);
console.log(answer);


//sum array elements 

var number=[53,45,5,34,234,455,42];
var sum =0;
for( var i=0; i< number.length; i++){
    var element =number[i];
    sum = element+ sum;

}
console.log(sum);

//sum array elemnts by function

function getSum(numbers){
    var sum =numbers[0];
    for( var i=0; i < numbers.length;i++ ){
    var element =numbers[i];
    sum = element + sum;

    }
    return sum

}


var tk =[43,4321,54,345,3245,56,35];
var answer = getSum(tk);
console.log(answer);



//find smallest number in array

function getSmallest(numbers){
    var smallest =87;
    for(var i = 0; i< numbers.length; i++){
        var element = numbers[i];
        if( element < smallest){
            smallest=element

        }
    }
    return smallest
}

var age =[54,43,23,67,87,43,24,25];
var answer= getSmallest(age );
console.log(answer);



