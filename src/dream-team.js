module.exports = function createDreamTeam(members) {
	if(Array.isArray(members) === true){
		let result = ''
		  members.forEach(element => {
			  if(typeof element === 'string'){
				  result += element.trim()[0].toUpperCase();
			  }
		  });
		  return [...result].sort().join('')
		}
		return false
};