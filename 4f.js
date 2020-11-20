//check if prime
function ifPrime(number){
	for(var i = 2; i < number; i++)
    if(number % i == 0) {
		return "given number is not prime";}
	else{
		return "given number is prime";}
	}
console.log(ifPrime(5));