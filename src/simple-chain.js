const chainMaker = {
	chain: [],
	getLength() {
	  console.log('length')
	  return this
	},
	addLink(value) {
		value === undefined ? this.chain.push('(  )') : this.chain.push(`( ${value} )`)
		return this
	},
	removeLink(position) {
		if(isNaN(position) || position-1 > this.chain.length-1 || position-1 < 0){
			this.chain = [];
			throw new Error()
		} else {
			this.chain.splice(position-1,1)
		}
		return this
	},
	reverseChain() {
		this.chain.reverse()
		return this
	},
	finishChain() {
		result = this.chain.join('~~');
		this.chain = [];
		return result
	}
  };

module.exports = chainMaker;
