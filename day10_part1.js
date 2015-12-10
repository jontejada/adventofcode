// 3113322113
// 132123222113
// 111312111213322113
// 3113111231121123222113
// 1321133112132112211213322113
// 11131221232112111312212221121123222113

// 3-11-33-22-11-3
// 1 2  2  2  2  1
// 3 1  3  2  1  3
// 132123222113
// 1-3-2-1-2-3-222-11-3
// 1 1 1 1 1 1 3   2  1
// 1 3 2 1 2 3 2   1  3

var start = '3113322113';
var round = 1;

function looksay(input, it) {
	var arr = [];
	for (var i = 0; i < input.length; i++) {
		var j = i+1;
		var str = '';
		while (input[i] === input[j]) {
			str += input[i];
			i++;
			j++;
		}
		str += input[i];
		arr.push(str);
	}
	var output ='';
	for (var k = 0; k < arr.length; k++) {
		output += arr[k].length;
		output += arr[k][0];
	}
	if (round < it) {
		round++;
		return looksay(output,it);	
	} else return output;
}

console.log(looksay(start,40).length);
