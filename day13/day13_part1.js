function permutator(inputArr) {
	var results = [];
	function permute(arr, memo) {
		var cur, memo = memo || []; //(?)
		for (var i = 0 ; i < arr.length ; i++ ) {
			cur = arr.splice(i,1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i,0,cur[0]);
		}
		return results;
	}
	return permute(inputArr);
}


var fs = require('fs');
fs.readFile('data.txt', 'utf8', function(err,data) {
	var permInput = ['A','B','C','D','E','F','G','M'];
	var allPermutations = permutator(permInput);
	// console.log(allPermutations);

	var happyArr = data.split('\n');
	happyArr.forEach(function(elem,k,arr){
		arr[k] = elem.split(' ');
	});
	// console.log(happyArr);
	
	var totalHappy = [];

	allPermutations.forEach(function(permElem,n,arr) {
		var seat1 = permElem[0];
		var seat2 = permElem[1];
		var seat3 = permElem[2];
		var seat4 = permElem[3];
		var seat5 = permElem[4];
		var seat6 = permElem[5];
		var seat7 = permElem[6];
		var seat8 = permElem[7];
		var count = 0;

		console.log(happyArr.length);


		for (var j = 0; j< happyArr.length; j++) {
			console.log(j + happyArr[j][0][0]);
			var firstName = happyArr[j][0][0];
			var secondName = happyArr[j][10][0];
			var valueStr = '';
			if (happyArr[j][2] === 'lose') {
				valueStr += '-';
			}
			valueStr += happyArr[j][3];

			if (seat1 === firstName && seat2 === secondName) {
				count += Number(valueStr);
			}
			if (seat2 === firstName && seat3 === secondName) {
				count += Number(valueStr);
			}
			if (seat3 === firstName && seat4 === secondName) {
				count += Number(valueStr);
			}
			if (seat4 === firstName && seat5 === secondName) {
				count += Number(valueStr);
			}
			if (seat5 === firstName && seat6 === secondName) {
				count += Number(valueStr);
			}
			if (seat6 === firstName && seat7 === secondName) {
				count += Number(valueStr);
			}
			if (seat7 === firstName && seat8 === secondName) {
				count += Number(valueStr);
			}
			if (seat8 === firstName && seat1 === secondName) {
				count += Number(valueStr);
			}
			if (seat1 === secondName && seat2 === firstName) {
				count += Number(valueStr);
			}
			if (seat2 === secondName && seat3 === firstName) {
				count += Number(valueStr);
			}
			if (seat3 === secondName && seat4 === firstName) {
				count += Number(valueStr);
			}
			if (seat4 === secondName && seat5 === firstName) {
				count += Number(valueStr);
			}
			if (seat5 === secondName && seat6 === firstName) {
				count += Number(valueStr);
			}
			if (seat6 === secondName && seat7 === firstName) {
				count += Number(valueStr);
			}
			if (seat7 === secondName && seat8 === firstName) {
				count += Number(valueStr);
			}
			if (seat8 === secondName && seat1 === firstName) {
				count += Number(valueStr);
			}
		}
		console.log(count);
		happyArr.push(count);
	});
});




		// var firstName = permElem[0];
		// var secondName = permElem[10];
		// var valueStr = '';
		// if (permElem[2] === 'lose') {
		// 	valueStr += '-';
		// }
		// valueStr += permElem[3];
		// // console.log(firstName + secondName + valueStr);
		// console.log(permElem);



//allPermutations stuff
//[ 'M', 'G', 'F', 'E', 'D', 'B', 'A', 'C' ],
// MG, GF, FE, ED, DB, BA, AC, CM
// GM, FG, EF, ED, BD, AB, CA, MC
//8 people
//16 feels


//happyArr stuff
// Carol would lose 51 happiness units by sitting next to David.
// 0     1     2    3  4         5     6  7       8    9  10
//first name letter: [0][0]
//second name letter: [10][0]
//plus or minus: [2] === 'lose' or 'gain'
//value: [3] or Number(____[3])




