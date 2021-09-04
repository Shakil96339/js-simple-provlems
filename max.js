//find who is bigger

let first =3246;
let second =34;
let third =4265;
if (first>second && first> third){
    console.log('first is bigger');
}
else if( second> first && second> third){
    console.log('second is bigger ');
}
else{
    console.log('third is bigger');
}

//find between ,who is smaller
let iHave = 440;
let friendHave =52;
let sheHas =61;
if ( iHave< friendHave && iHave< sheHas){
    console.log(iHave);
    console.log('i am smaller');
}
else  if( friendHave< iHave && friendHave< sheHas){
    console.log();
    console.log('yes ,,i am smaller',friendHave);
    
}
else{
    console.log(' sorry guys,,i am smaller');
    console.log(sheHas);
}


// find who is bigger
function findLargest(first,middle,last){
     
     if(first> last && first >middle ){
         return first
     }
     else if( middle > first && middle > last){
        return middle;
     }
     else{
         return last;
     }
        
    }

var answer = findLargest(342,433,233);
console.log('The answer is', answer);
