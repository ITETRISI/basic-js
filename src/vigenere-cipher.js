class VigenereCipheringMachine {
	constructor(reverse) {
        this.reverse = reverse;
    }
    encrypt(str,key) {
		if(!str || !key) throw new Error()
		str = str.toUpperCase();
		key = key.toUpperCase();
		str = str.split(' ')
		let position = 0;
		str = str.map(element => {
			return [...element].map( char => {
				if(/^[A-Z]$/.test(char)){
					let newChar = key.codePointAt(position % key.length)-65+char.codePointAt(0);
					char = String.fromCodePoint(newChar <= 90 ? newChar : newChar%90 + 64)
					position++
				}
				return char
			}).join('')	
		}).join(' ');
		return (this.reverse === false)? str.split('').reverse().join('') : str
    }

    decrypt(str,key) {
		if(!str || !key) throw new Error()
		key = key.toUpperCase();
		str = str.split(' ')
		let position = 0;
        str = str.map(element => {
			return [...element].map( char => {
				if(/^[A-Z]$/.test(char)){
					let newChar = 91-key.codePointAt(position % key.length)+char.codePointAt(0);
					char = String.fromCodePoint(newChar <= 90 ? newChar : newChar%90 + 64)
					position++
				}
				return char
			}).join('')	
		}).join(' ');
		return (this.reverse === false)? str.split('').reverse().join('') : str
    }
}

module.exports = VigenereCipheringMachine;
