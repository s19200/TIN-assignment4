//alphabetical order
function order(input){
	var finalString = input.split("").sort().join("");
	return finalString;
}
console.log(order("whatever"));