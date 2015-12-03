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

		//part two WORKING
		var perimeterOne = 2 * (eval(dimensions[0]) + eval(dimensions[1]));
		var perimeterTwo =  2 * (eval(dimensions[0]) + eval(dimensions[2]));
		var perimeterThree =  2 * (eval(dimensions[1]) + eval(dimensions[2]));
		var smallestPerimeter = Math.min(perimeterOne,perimeterTwo,perimeterThree);
		var bow = dimensions[0] * dimensions[1] * dimensions[2];
		var ribbon = smallestPerimeter + bow;
		totalRibbon += ribbon;

		//part two using sort
		// var unorderedDimensions = dataArr[i].split('x');
		// unorderedDimensions.sort(function(a, b) {
		//   return a - b;
		// });
		// var perim = 2 * (eval(unorderedDimensions[0]) + eval(unorderedDimensions[1]));
		// var bo = unorderedDimensions[0] * unorderedDimensions[1] * unorderedDimensions[2];
		// totalRibbon = totalRibbon + perim + bo;

	}
	console.log(totalPaper + " square feet of paper");
	console.log(totalRibbon + " feet of ribbon");
});