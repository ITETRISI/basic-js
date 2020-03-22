module.exports = function countCats(matrix) {
	return matrix.reduce((sum,current) => {
		current.filter( element => {element=='^^'?sum++:sum})
		return sum
	},0);
};
