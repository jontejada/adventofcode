var fs = require('fs');
var north = '^';
var south = 'v';
var east = '>';
var west = '<';
var posX = 10000;
var posY = 10000;
var obj = {};

fs.readFile('data.txt', 'utf8', function(err,data){
	for (i=0; i<data.length; i++) {
		var address = posX + 'x' + posY + 'y';
		obj[address] = true;
		if (data[i] === north) {
			posY++;
		}
		if (data[i] === south) {
			posY--;
		}
		if (data[i] === east) {
			posX++;
		}
		if (data[i] === west) {
			posX--;
		}
		obj[address] = true;
	}
	console.log(Object.keys(obj).length);
});

