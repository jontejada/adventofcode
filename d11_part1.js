// charCodes:
// a = 97
// b = 98
// .
// .
// .
// y = 121
// z = 122

//invalids: 
// i = 106
// o = 111
// l = 108

// valid password:
// straight of three chars, no invalids, two pair sets

var myInput = 'vzbxkghb';

function nextLetter(inputLetter) {
	var output = String.fromCharCode(inputLetter.charCodeAt() + 1);
	if (output === '{') {
		output = 'a';
	}
	return output;
}

// console.log(nextLetter('b'));
// console.log(nextLetter('z'));

	// for (var i = input.length - 1 ; i >= 0 ; i--) {
	// 	output = input.charCodeAt(i) + output;
	// }
	// var output = String.fromCharCode(input.charCodeAt(input.length - 1) + 1);


function nextPassword(inputStr) {
	//last char
	var output = nextLetter(inputStr[inputStr.length - 1]);
	//rest of password
	// var n = 1;
	for (var i = 0 ; i < inputStr.length ; i++) {
		if (output[output.length - (i+1)] === 'a') {
			// output = nextLetter(inputStr[inputStr.length - (i+1)])
		}
	}

	while (output[output.length-n] === 'a') {
		n++;
		output = nextLetter(inputStr[inputStr.length - n]) + output;
	}

	return output;
}


console.log(nextPassword(myInput));