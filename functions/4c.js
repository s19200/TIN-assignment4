//palindrome
function check(input){
	var finalString = input.split("").reverse().join("");
	if(finalString===input){
		return "input string is a palindrome";
	}
	else {return "input string is not a palindrome";
	}
}

console.log(check("anna"));
console.log(check("hello"));