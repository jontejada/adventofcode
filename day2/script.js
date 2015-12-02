var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,'utf8',function(err,data){
	var dataArr = data.split('\n');
	var totalPaper = 0;
	for (i=0; i<dataArr.length; i++) {
		var dimensions = dataArr[i].split('x');
		var faceOne = dimensions[0] * dimensions[1];
		var faceTwo = dimensions[0] * dimensions[2];
		var faceThree = dimensions[1] * dimensions[2];
		var smallest = Math.min(faceOne,faceTwo,faceThree);
		var paper = smallest + 2 * (faceOne + faceTwo + faceThree);
		totalPaper += paper;
	}
	console.log(totalPaper);
});