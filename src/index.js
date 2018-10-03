module.exports = function longestConsecutiveLength(array) {

	let sorted = array.sort(function(a, b) {return a-b});
	let length = sorted.length;
	let result;
	let spot;
	
	spot = null;
	result = null;

	if (length == 0) {
		return 0;
	} 
	else if (length == 1) {
		return 1;
	} 
	else {
		for (var i = 0; i < length; i++) {
		spot = spot + 1;
		
			if(result<spot){
				result = spot;
			}
			if(sorted[i] == (sorted[i+1])){
				spot = spot - 1;
			} else if (sorted[i] != (sorted[i+1] -1 )){
				spot = 0;
			}
			
		}
	console.log(result);
	return result;
	}
}
