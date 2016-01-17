"use strict";

function nonUnique(data) {
	//console.log("data=",data)

  var dupes = data.reduce(function(dupes, val, i) {
    if (isNaN(val)) {
		var s = val.toLowerCase();
		var t = val.toUpperCase();
    if (data.indexOf(s) !== i && dupes.indexOf(s) === -1) {
      dupes.push(s);
    }
    if (data.indexOf(t) !== i && dupes.indexOf(t) === -1) {
      dupes.push(t);
    }
	} else {
    if (data.indexOf(val) !== i && dupes.indexOf(val) === -1) {
        dupes.push(val);
    }
	}
    return dupes;
  }, [])
  //console.log(dupes)

  var filtered = data.filter(function(val) {
    //console.log("val=",val, "; ",dupes.indexOf(val))
    return dupes.indexOf(val) >= 0
  })

  //console.log("dupes=",dupes)
	//console.log("filtered=",filtered)

  return filtered;
}

var assert = require('assert');

assert.deepEqual(nonUnique(['X', 'H', 'e', 'V', 'm', 'l', 's', 1, 0, 'y', 'j', 'b', 'g', 'o', 'R', 'U', 'O', 'p', 'p', 8, 'Y', 'B', 'Y', 'O', 'r', 'E', 't', 'I', 'w', 'i', 'v', 'o', 2, 'd', 'Z', 'b', 'S', 'T', 'n', 0]), ["e","V","s",0,"y","b","o","R","O","p","p","Y","B","Y","O","r","E","t","I","i","v","o","b","S","T",0], "Shiit");
