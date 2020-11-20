//return second lowest and second greatest
function returnNumbers(input){
	var sorted = input.sort(function(a,b){
		return a-b;
	});
	var secondLowest = sorted[1];
	var secondGreatest = sorted[sorted.length-2];
	var returnThese = [secondLowest, secondGreatest]; 
	return returnThese;
}
var numbers = [1,8,4,3,7,5,9,13,10];
console.log(returnNumbers(numbers));