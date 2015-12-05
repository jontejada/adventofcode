var fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err,data){
	var dataArr = data.split('\n');
	var niceStrCount = 0;
	
	for (i=0; i<dataArr.length; i++) {
		var input = dataArr[i];

		//vowel test
		var hasThreeVowels = false;
		var vowelCount = 0;
		for (j=0; j<input.length; j++) {
			if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
				vowelCount++;
			}
		}
		if (vowelCount > 2) {
			hasThreeVowels = true;
		}

		//twice test
		var hasLetterTwice = false;
		for (j=0; j<input.length; j++) {
			if (input[j] === input[j+1]) {
				hasLetterTwice = true;
			}
		}

		//bad str test
		var noBadStrings = true;
		var badStrings = ['ab', 'cd', 'pq', 'xy'];
		for (j=0; j<input.length; j++) {
			var twoLetters = input[j] + input[j+1];
			if (twoLetters === 'ab' ||twoLetters === 'cd' ||twoLetters === 'pq' ||twoLetters === 'xy') {
				noBadStrings = false;
			}
		}

		//add nice strings
		if (hasThreeVowels && hasLetterTwice && noBadStrings) {
			niceStrCount++;
		}

	}

	console.log(niceStrCount);
});
