module.exports = function getSeason(date) {
	const MONTH = { 
		4: 'winter',
		3: 'autumn',
		2: 'summer',  
		1:'spring',
		0: 'winter',
	}
	if(!date)
	return 'Unable to determine the time of year!'
	if(date.prototype != new Date().prototype || !date.getUTCDate())
	throw new Error()
	return MONTH[Math.round(date.getMonth()/3)];
};
