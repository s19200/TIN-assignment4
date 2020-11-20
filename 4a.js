
//recursive function using function expression

var fun = function(number){
if (number ==0 || number == 1){
	return 1;
}
var result = number*factorial(number-1);
console.log(result);
}


//iterative function using function declaration
function factorial(n){
	let answer = 1;
  if (n == 0 || n == 1){
    return 1;
  }
  else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

console.log(factorial(5));