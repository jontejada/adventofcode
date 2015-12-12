var fs = require('fs');

fs.readFile('data.txt', 'utf8', function (err, data) {
	var dataArr = data.split(/[a-z",:{{}\[\]]+/);
	var total = 0;
	console.log(dataArr);
	for (var i = 0; i < dataArr.length; i++) {
			total += Number(dataArr[i]);
	}
	console.log(total);
});