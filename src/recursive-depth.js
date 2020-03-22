module.exports = class DepthCalculator {
    calculateDepth(arr, result = 1, current = 1) {
		arr.forEach(element => {
			if(Array.isArray(element)){
				current++
				current>result ? result++ : result;
				result = this.calculateDepth(element, result, current)
				current--
			}
		});
        return result
    }
};