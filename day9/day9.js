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
  var permInput = ['Tr','Al','Sn','Ta','Fa','No','St','Ar'];
  var distances = data.split('\n');
  distances.forEach(function(elem,k,arr) {
    arr[k] = elem.split(' ');
  });
  console.log(distances[0][0].substr(0,2));
  console.log(distances[0][2].substr(0,2));
  console.log(distances[0][4]);

  var allPermutations = permutator(permInput);

  var totalDistances = [];
  allPermutations.forEach(function(permElem,n,arr) {
    // console.log(permElem);
    // console.log('n is ' + n);
    //console.log(permElem[1]);
    for (var i = 0; i<distances.length; i++) { 
      var distanceStart = distances[i][0].substr(0,2);
      var distanceEnd = distances[i][2].substr(0,2);
      var distance = distances[i][4];
      var location1 = permElem[0];
      var location2 = permElem[1];
      var location3 = permElem[2];
      var location4 = permElem[3];
      var location5 = permElem[4];
      var location6 = permElem[5];
      var location7 = permElem[6];
      var location8 = permElem[7];

      if ( ((distanceStart === location1) && (distanceEnd === location2)) || ((distanceEnd === location1) && (distanceStart === location2)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location2) && (distanceEnd === location3)) || ((distanceEnd === location2) && (distanceStart === location3)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location3) && (distanceEnd === location4)) || ((distanceEnd === location3) && (distanceStart === location4)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location4) && (distanceEnd === location5)) || ((distanceEnd === location4) && (distanceStart === location5)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location5) && (distanceEnd === location6)) || ((distanceEnd === location5) && (distanceStart === location6)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location6) && (distanceEnd === location7)) || ((distanceEnd === location6) && (distanceStart === location7)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }
      
      if ( ((distanceStart === location7) && (distanceEnd === location8)) || ((distanceEnd === location7) && (distanceStart === location8)) ) {
        if (!totalDistances[n]) {
          totalDistances[n] = Number(distance);
        } else {
          totalDistances[n] += Number(distance);
        }
      }      
    }
    // console.log(totalDistances[n]);
  });
  totalDistances.sort(function(a,b){
    return a-b;
  });
  console.log(totalDistances);
});

