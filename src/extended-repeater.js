module.exports = function repeater(str, options) {
	let array;
	let add;
	const {repeatTimes,separator,addition,additionRepeatTimes,additionSeparator} = options;
	if (repeatTimes) {
		array = new Array(repeatTimes).fill(`${str}`);
	} else {
		array = str;
	}
	if ( addition || addition === null || addition === false ) {
		if (additionRepeatTimes) {
			add = new Array(additionRepeatTimes).fill(`${addition}`);
			if (additionSeparator) {
				array = array.map(element => element + add.join(additionSeparator))
			} else {
				array = array.map(element => element + add.join(''))
			}
		} else {
			array += addition;
		}
	}
	if(!repeatTimes){
		return array
	}
	if (separator) {
		return array.join(separator)
	} else {
		return array.join('+')
	}
};
  