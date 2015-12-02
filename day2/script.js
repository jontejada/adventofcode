var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,'utf8',function(err,data){
	var dataArr = data.split('\n');
	var totalPaper = 0;
	var totalRibbon = 0;
	for (i=0; i<dataArr.length; i++) {
		var dimensions = dataArr[i].split('x');
		
		//part one WORKING
		var faceOne = dimensions[0] * dimensions[1];
		var faceTwo = dimensions[0] * dimensions[2];
		var faceThree = dimensions[1] * dimensions[2];
		var smallestFace = Math.min(faceOne,faceTwo,faceThree);
		var paper = smallestFace + 2 * (faceOne + faceTwo + faceThree);
		totalPaper += paper;

		//part two NOT WORKING
		var perimeterOne = 2 * (dimensions[0] + dimensions[1]);
		var perimeterTwo =  2 * (dimensions[0] + dimensions[2]);
		var perimeterThree =  2 * (dimensions[1] + dimensions[2]);
		var smallestPerimeter = Math.min(perimeterOne,perimeterTwo,perimeterThree);
		var bow = dimensions[0] * dimensions[1] * dimensions[2];
		var ribbon = smallestPerimeter + bow;
		totalRibbon += ribbon;
	}
	console.log(totalPaper + " square feet of paper");
	console.log(totalRibbon + " feet of ribbon");
});