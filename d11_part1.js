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

// var myInput = 'vzbxkghb';
// var testInput = 'abzz';

// function nextLetter(inputLetter) {
// 	var output = String.fromCharCode(inputLetter.charCodeAt() + 1);
// 	if (output === '{') {
// 		output = 'a';
// 	}
// 	return output;
// }

// // console.log(nextLetter('b'));
// // console.log(nextLetter('z'));

// 	// for (var i = input.length - 1 ; i >= 0 ; i--) {
// 	// 	output = input.charCodeAt(i) + output;
// 	// }
// 	// var output = String.fromCharCode(input.charCodeAt(input.length - 1) + 1);


// function nextPassword(inputStr) {
// 	//last char
// 	// var output = nextLetter(inputStr[inputStr.length - 1]);
// 	//rest of password
// 	// var n = 1;
// 	for (var i = 0 ; i < inputStr.length ; i++) {
// 		if (output[output.length - (i+1)] === 'a') {
// 			// output = nextLetter(inputStr[inputStr.length - (i+1)])
// 		}
// 	}

// 	while (output[output.length-n] === 'a') {
// 		n++;
// 		output = nextLetter(inputStr[inputStr.length - n]) + output;
// 	}


// 	var output = '';

// 	for (var i = inputStr.length -1 ; i >=0 ; i--) {
// 		if (inputStr[i] === 'z') {
// 			output = nextLetter(inputStr[i]) + output;

// 		}
// 	}


// 	return output;
// }


// // console.log(nextPassword(myInput));
// console.log(nextPassword(testInput));




var myInput = 'vzbxkihb';
var testInput = 'abaz';

function convertInput(inputStr) {
	var workingArr = [];
	for (var i = 0; i < inputStr.length; i++) {
		workingArr.unshift(inputStr.charCodeAt(i));
	}
	return workingArr;
}

function nextPass(inputStr) {
	var inputArr = convertInput(inputStr);
	var outputArr = [inputArr[0] + 1];

	for (var i = 1; i < inputArr.length; i++) {
		if (outputArr[i-1] === 123) {
			outputArr.push(inputArr[i] + 1 );
		} else {
			outputArr.push(inputArr[i]);
		}
	}
	outputArr.reverse();
	var outputStr = '';
	for (var j = 0; j < outputArr.length; j++) {
		if (outputArr[j] === 123) {
			outputArr[j] = 97;
		}
		outputStr += String.fromCharCode(outputArr[j]);
	}
	return outputStr;
}

function hasInvalid(inputStr) {
	var output = false;
	for (var i = 0 ; i < inputStr.length ; i++) {
		if (inputStr[i] === 'i' || inputStr[i] === 'o' || inputStr[i] === 'l') {
			output = true;
		}
	}
	return output;
}

function nextValidPass(inputStr) {
	var output = nextPass(inputStr);
	while (hasInvalid(output)) {
		output = nextPass(output);
	}
	return output;
}

console.log(nextPass(myInput));







