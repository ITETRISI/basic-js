module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error()
	let array = [];
	let length = arr.length - 1;
	for (let i = 0; i <= length; i++) {
		if(arr[i] === '--double-next'){
			if(i < length){
				array.push(arr[i+1])
			}
		} else if(arr[i] === '--double-prev'){
			if(i > 0){
				array.push(arr[i-1])
			}
		} else if (arr[i] === '--discard-prev') {
			if(i > 0){
				array.pop()
			}
		} else if (arr[i] === '--discard-next') {
			if (i < length) {
				i++;
			}
		} else {
			array.push(arr[i])
		}
	}
	return array
};
