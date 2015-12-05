var fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err,data){
	var dataArr = data.split('\n');
	var niceStrCount = 0;
	for (i=0; i<dataArr.length; i++) {
		var input = dataArr[i];

		//pair repeat test
		var hasPairRepeat = false;
		for(j=0; j<input.length; j++) {
			//console.log('===================== j loop ' + j);
			for(k=j+2; k<input.length; k++) {
				//console.log('======== k loop ' + k);
				//console.log(input + " " + j + "j " + k + "k");
				//console.log('j ss ' + input.substr(j,2));
				//console.log('k ss ' + input.substr(k,2));
				if (input.substr(j,2) === input.substr(k,2)) {
					hasPairRepeat = true;
				}
			}
		}

		//letter char letter test
		var hasLetterTwice = false;
		for (j=0; j<input.length; j++) {
			if (input[j] === input[j+2]) {
				hasLetterTwice = true;
			}
		}

		//add nice strings
		if (hasPairRepeat && hasLetterTwice) {
			niceStrCount++;
		}

	}

	console.log(niceStrCount);
});
