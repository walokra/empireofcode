/*
Cipher Map

We still need more complex passwords for our Vault. Maybe we can use a password grille system. This way the encoder can be confident that no hooligan will easily gain access to our stuff.

A cipher grille is a 4×4 square of paper with four windows cut out. Placing the grille on a paper sheet of the same size, the encoder writes down the first four symbols of his password inside the windows (see fig. below). After that, the encoder turns the grille 90 degrees clockwise. The symbols written earlier become hidden under the grille and clean spaces appear inside the windows. The encoder then writes down the next four symbols of the password in the windows and turns the grille 90 degrees again. Then, they write down the next four symbols and turn the grille once more. They then write down the final four symbols of the password. Without the cipher grille, it is very difficult to discern the password from the resulting square comprised of 16 symbols.

Write a module that enables the robots to easily recall their passwords using a cipher grille.

Grille      Password

X . . .     i t d f
. . X .     g d c e
X . . X     a t o n
. . . .     q r d i

i . . .   . t . f   . . . .   . . d .
. . c .   . . . .   g . . e   . d . .
a . . n   . . o .   . t . .   . . . .
. . . .   . r . .   . . . i   q . d .
 ican   +  tfor   +  geti   +  ddqd

Input: A cipher grille and a ciphered password as an arrays of strings.
Output: The password as a string.

Example:
recallPassword(
    ['X...',
     '..X.',
     'X..X',
     '....'],
    ['itdf',
     'gdce',
     'aton',
     'qrdi']) == 'icantforgetiddqd'
recallPassword(
    ['....',
     'X..X',
     '.X..',
     '...X'],
    ['xhwc',
     'rsqx',
     'xqzz',
     'fyzr']) == 'rxqrwsfzxqxzhczy'

Precondition:
|cipher grille| = 4
|ciphered password| = 4

cipher grille and ciphered password are square.

Optional goals
Rank 2:

A grille can be bigger size than 4 by 4. And the password can be more than 16 characters.

Precondition Rank 2:
|cipher grille| ≥ 4
|ciphered password| ≥ 4

Rank 3:
If first letter (first row, first column) is a capital letter, then turns the grille 90 degrees counterclockwise.

How it is used:
In this mission you learn how to work with 2D arrays. You also get to learn about Grille Ciphers, a technique of encoding messages which has been in use for nearly half a millenium. The earliest known description of the grille cipher comes from the Italian mathematician, Girolamo Cardano in 1550.
*/
"use strict";

function recallPassword(cipherGrille, cipheredPassword) {
	var result = "";

	// Make 2D array
	var cipherMatrix = [];
	for (var i = 0; i < cipherGrille.length; i++) {
		cipherMatrix[i] = cipherGrille[i].split('');
	}

	var rotMatrix = cipherMatrix;
	for (var i=0; i < 4; i++) {
		if (i > 0) {
			var isUppercase = (cipheredPassword[0][0] === cipheredPassword[0][0].toUpperCase());
			
			if (isUppercase) {
				rotMatrix = rotateMatrixNeg90(rotMatrix, cipherMatrix[0].length);
				// console.log("rotMatrix=" + rotMatrix);
			} else {
				rotMatrix = rotateMatrix90(rotMatrix, cipherMatrix[0].length);
			}
		}
		result += checkGrille(rotMatrix, cipheredPassword);
		// console.log("result=" + result);
	}
		
	// console.log("result=" + result);
	
    return result;
}

function checkGrille(matrix, cipheredPassword) {
	var ret = "";
	var n = matrix[0].length;
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < n; ++j) {
			// console.log("matrix["+ (i) + "][" + j +"]=" + matrix[i][j])
            if (matrix[i][j] === "X") {
            	ret += cipheredPassword[i][j]
            }
			// console.log("ret=" + ret);
        }
    }
	
	return ret;
}

function rotateMatrix90(matrix, n) {
    var ret = [];
	for (var i=0; i < n; i++) {
		ret[i] = [];
	}
	
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < n; ++j) {
			// console.log("matrix["+ (n - j - 1) + "][" + i +"]=" + matrix[n - j - 1][i])
            ret[i][j] = matrix[n - j - 1][i];
			// console.log("ret[" + i + "][" + j + "]=" + ret[i][j]);
        }
    }

    return ret;
}

function rotateMatrixNeg90(matrix, n) {
    var ret = [];
	for (var i=0; i < n; i++) {
		ret[i] = [];
	}
	// console.log("matrix=" + matrix);	
    for (var i = 0; i < n; ++i) {
		// console.log("=========================================");
        for (var j = 0; j < n; ++j) {
			// console.log("matrix["+ (i) + "][" + (n - j - 1) +"]=" + matrix[(n - j - 1)][(n - i - 1)])
            ret[(i)][(n - j - 1)] = matrix[(n - j - 1)][(n - i - 1)];
			// console.log("ret[" + (n - j - 1) + "][" + (n - i - 1) + "]=" + ret[(n - j - 1)][(n - i - 1)]);
        }
    }

    return ret;
}

/*
// Get an array element in column/row order
function getArray2d(a, x, y) {
   return a[y][x]; 
}

// Get an array element rotated 90 degrees clockwise
function getArray2dCW(a, x, y) {
    var t = x;
    x = y;
    y = a.length - t - 1;
    return a[y][x];
}

// Get an array element rotated 90 degrees counter-clockwise
function getArray2dCCW(a, x, y) {
    var t = x;
    x = a[0].length - y - 1;
    y = t;
    return a[y][x];
}

// Get an array element rotated 180 degrees
function getArray2d180(a, x, y) {
    x = a[0].length - x - 1;
    y = a.length - y - 1;
    return a[y][x];
}

--
Implementation of dimple's +90 pseudocode (e.g. transpose then reverse each row) in JavaScript:
function rotate90(a){
  // transpose from http://www.codesuck.com/2012/02/transpose-javascript-array-in-one-line.html
  a = Object.keys(a[0]).map(function (c) { return a.map(function (r) { return r[c]; }); });
  // row reverse
  for (i in a){
    a[i] = a[i].reverse();
  }
  return a;
}
*/
var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(recallPassword(
        ['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']), 'icantforgetiddqd', 'First example');

    assert.equal(recallPassword(
        ['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']), 'rxqrwsfzxqxzhczy', 'Second example');

    // Rank 2
    assert.equal(recallPassword(
        ['.X...X.',
         'X.....X',
         '.......',
         '...X...',
         '.......',
         'X.....X',
         '.X...X.'],
        ['loremip',
         'sumdolo',
         'rsitame',
         'tconsec',
         'teturad',
         'ipiscin',
         'gelitqu']), "oisonineqoisonineqoisonineqoisonineq", "R2");

		 // ['.....'],
		 // ['.....'],
		 // ['..X..'],
		 // ['XX.XX'],
		 // ['.....'],
		 //
		 // ['...X.'],
		 // ['...X.'],
		 // ['..X..'],
		 // ['...X.'],
		 // ['...X.'],
		 
    // Rank 3
    assert.equal(recallPassword(
        ['.X...',
         '.X...',
         '..X..',
         '.X...',
         '.X...'],
        ['QWERT',
         'ASDFG',
         'ZXCVB',
         'YUIOP',
         'GHJKL']), "WSCUHCYUOPRFCOKASFGC", "R3");
		 
	assert.equal(recallPassword(['...X.', '.X...', '...X.', '.X...', '...X.'], ['Qwert', 'aSdfg', 'zXSVb', 'yuiop', 'ghjkl']), "rSVukadguowfXohSfyip", "R4: rSVukadguowfXohSfyip");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
