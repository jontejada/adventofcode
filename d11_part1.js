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

// valid password: straight of three chars, no invalids, two pair sets

var realInput = 'vzbxkghb';
var testInput1 = 'vzbxkihb';
var testInput2 = 'abaz';
var realInput2 = 'vzbxxyzz';

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

function hasStraight(inputStr) {
	var output = false;
	var inputArr = convertInput(inputStr);
	if (inputArr[0] === inputArr[1] + 1 && inputArr[0] === inputArr[2] + 2) {
		output = true;
	}
	if (inputArr[1] === inputArr[2] + 1 && inputArr[1] === inputArr[3] + 2) {
		output = true;
	}
	if (inputArr[2] === inputArr[3] + 1 && inputArr[2] === inputArr[4] + 2) {
		output = true;
	}
	if (inputArr[3] === inputArr[4] + 1 && inputArr[3] === inputArr[5] + 2) {
		output = true;
	}
	if (inputArr[4] === inputArr[5] + 1 && inputArr[4] === inputArr[6] + 2) {
		output = true;
	}
	if (inputArr[5] === inputArr[6] + 1 && inputArr[5] === inputArr[7] + 2) {
		output = true;
	}
	return output;

}

function hasTwoPair(inputStr) {
	var output = false;
	var inputArr = convertInput(inputStr);
	var pairs = 0;
	for (var i = 0; i < inputArr.length; i++) {
		if (inputArr[i] === inputArr[i+1]) {
			pairs++;
			i++;
		}
	}
	if (pairs > 1) {
		output = true;
	}
	return output;
}

function nextValidPass(inputStr) {
	var output = nextPass(inputStr);
	while (hasInvalid(output) || !hasStraight(output) || !hasTwoPair(output)) {
		output = nextPass(output);
	}
	return output;
}

console.log(nextValidPass(realInput2));