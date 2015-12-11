function permutator(inputArr) {
  var results = [];
  function permute(arr, memo) {
    var cur, memo = memo || [];
    for (var j = 0; j < arr.length; j++) {
      cur = arr.splice(j, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(j, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}


var fs = require('fs');
fs.readFile('data.txt', 'utf-8', function(err, data) {
  var input = ['Tr','Ac','Sn','Ta','Fa','No','St','Ar'];
  var dataArr = data.split('\n');
  dataArr.forEach(function(elem,i,arr) {
    arr[i] = elem.split(' ');
  });
  console.log(dataArr[0][0].substr(0,2));
  console.log(dataArr[0][2].substr(0,2));
  console.log(dataArr[0][4]);

  var allPer = permutator(input);

  var distArr = [];
  allPer.forEach(function(elem,i,arr) {
    //console.log(elem);
    for (var i = 0; i<dataArr.length; i++) {
      if ( (dataArr[i][0].substr(0,2) === elem[0] && dataArr[i][2].substr(0,2) === elem[1]) || (dataArr[i][0].substr(0,2) === elem[1] && dataArr[i][2].substr(0,2) === elem[0]) ) {
        // if (!distArr[i]) {
        //   distArr[i] = dataArr[i][4];  
        // } else {
        //   distArr[i] += dataArr[i][4];
        // }
        
      }
    }
  });
  // console.log(distArr.length);
});

