var fs = require('fs');
var north = '^';
var south = 'v';
var east = '>';
var west = '<';
var sPosX = 5000;
var sPosY = 5000;
var rPosX = 5000;
var rPosY = 5000;
var obj = {};

fs.readFile('data.txt', 'utf8', function(err,data){
	for (i=0; i<data.length; i++) {
		// obj[address] = true;
		if ((i+1)%2===0) {
			var address = rPosX + 'x' + rPosY + 'y';
			if (data[i] === north) {
				rPosY++;
			}
			if (data[i] === south) {
				rPosY--;
			}
			if (data[i] === east) {
				rPosX++;
			}
			if (data[i] === west) {
				rPosX--;
			}
			obj[address] = true;
		} else {
			var address = sPosX + 'x' + sPosY + 'y';
			if (data[i] === north) {
				sPosY++;
			}
			if (data[i] === south) {
				sPosY--;
			}
			if (data[i] === east) {
				sPosX++;
			}
			if (data[i] === west) {
				sPosX--;
			}
			obj[address] = true;		}
	}
	console.log(Object.keys(obj).length);
});