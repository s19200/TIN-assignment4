//longest word
function findLongest(input){
	let words = input.split(" ");
	let longest = 0;
	let word = null;
	for(i=0; i<words.length; i++){
		let count = words[i].length;
		if (count>longest) {
			longest = count;
			word = words[i];
		}
	}
	return word;
}
console.log(findLongest("bad luck to talk on these rides"));