/*
Robot Sort

All of the refined ingots should be sorted by size in each lot while passing by on a conveyor. Because the conveyor is already running, our robots needs to quickly swap neighboring ingots.

You are given the size and initial order of the ingots as an array of numbers. Indexes are their position, values are their sizes. You should order this array from the smallest to the largest in size.

For each action a Robot can swap two neighboring elements. Each action should be represented as a string with two digits - indexes of the swapped elements (ex, "01" - swap 0th and 1st ingots). The result should be represented as a string that contains the sequence of actions separated by commas. If the array does not require sorting, then return an empty string.

And you can swap only N*(N-1)/2 times, where N - is a quantity of ingots.

Initial   6 ============
position  4   ========
          2     ====

Swap      4   ========
0 - 1     6 ============
          2     ====

Swap      4   ========
1 - 2     2     ====
          6 ============

Swap      2     ====
0 - 1     4   ========
          6 ============

Input: An array of integers.
Output: The sequence of actions as a string.

Example:
swapSort([6, 4, 2]) // "01,12,01"
swapSort([1, 2, 3, 4, 5]) // ""
swapSort([1, 2, 3, 5, 3]) // "43"

Precondition:
1 ≤ |array| ≤ 10

How it is used:
This mission will show you how to work the simplest sorting algorithms. It also models one of the game mechanics in the classic puzzle game "Tetris Attack".
*/
"use strict";

function swapSort(array) {
    var moves = [];
    var len = array.length, i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                moves.push(""+j+(j+1));
            }
        }
    }

    // console.log("array=",array)
    // console.log("moves=",moves)

    return moves.join(",");
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var checkSolution = function (f, indata) {
        var result = f(indata.slice());
        var sortData = indata.slice();
        sortData.sort();
        var array = indata.slice();
        var la = array.length;
        if (typeof(result) !== "string") {
            console.log("The result should be a string");
            return false;
        }

        var actions = result.length ? result.split(",") : [];
        for (var a = 0; a < actions.length; a++) {
            var act = actions[a];
            if (act.length != 2 || isNaN(act)) {
                console.log("The wrong action: act");
                return false;
            }
            var i = Number(act[0]),
                j = Number(act[1]);
            if (i >= la || j >= la) {
                console.log("Index error: " + act);
                return false;
            }
            if (Math.abs(i - j) != 1) {
                console.log("The wrong action: {}".format(act));
                return false;
            }
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        if (actions.length > ~~(la * (la - 1) / 2)) {
            console.log("Too many actions. BOOM!");
            return false;
        }
        for (var k = 0; k < array.length; k++) {
            if (array[k] !== sortData[k]) {
                console.log("The array is not sorted. BOOM!");
                return false;
            }
        }
        return true;
    };

    assert(checkSolution(swapSort, [6, 4, 2]), "Reverse simple");
    assert(checkSolution(swapSort, [1, 2, 3, 4, 5]), "All right!");
    assert(checkSolution(swapSort, [1, 2, 3, 5, 3]), "One move");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
