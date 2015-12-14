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
		for (var j = 0; j< happyArr.length; j++) {
			var firstName = happyArr[0][0];
			var secondName = happyArr[10][0];
			var valueStr = '';
			if (happyArr[2] === 'lose') {
				valueStr += '-';
			}
			valueStr += happyArr[3];
			console.log(firstName+secondName+valueStr);
		}
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




