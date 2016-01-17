/*
Crystal Grid

An equal number of atoms, combined in the same way produce the same crystal forms, and the same crystal form does not depend on the nature of the atoms, but only on their number and mode of combination.

--Ellhard Mitscherlich

The initial crystal quality check phase (link) is not enough to satisfactorily pass a crystal for use. As such, we need to work to improve the process. Since we've checked random atomic lines/rows, perhaps it would be best to perform checks on random slices of the crystal. This crystal type contains two atoms composed of the elements "X" (Xenatom) and "Z" (Zorium). In a well grown crystal, these atoms should alternate down each row and column.

You are given a slice of crystal lattice as a grid (2D array) of the atoms "X" and "Z". A well grown grid should have proper periodic arrangements both horizontally and vertically. If one atom is found next to another atom of its element, the crystal is unusable. For example:

[["X", "Z"],
 ["Z", "X"]] is good

[["X", "Z", "X"],
 ["Z", "X", "Z"],
 ["X", "Z", "X"]] is good

[["X", "Z", "X"],
 ["Z", "Z", "Z"],
 ["X", "Z", "X"]] is bad

Input: Atomic grid as an array of arrays with strings.
Output: The crystal quality as a boolean.

Example:
checkGrid([["X", "Z"], ["Z", "X"]]) === True
checkGrid([["X", "X"], ["X", "X"]]) === False

Precondition:
1 < |grid| ≤ 12
∀ row ∈ grid: 1 < |row| ≤ 12
All rows have the same length and contains only "X"/"Z"

How it is used:
In this mission we will use more complex structure as list of list. This structure often use as tables or grids or land maps.
*/
"use strict";

function checkGrid(grid) {
  for(var i = 1; i < grid.length; i++) {
    var atom = grid[i];
    for(var j = 0; j < atom.length; j++) {
      //console.log("atom[" + i + "][" + j + "] = " + atom[j] + " : " + grid[i-1][j]);
      if (atom[j] === grid[i-1][j]) {
        return false;
      }
    }
  }
  return true;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkGrid([["X", "Z"], ["Z", "X"]]), true, "2x2 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "X", "Z"],
        ["X", "Z", "X"]]), true, "3x3 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["Z", "X", "Z", "X"]]), true, "2x4 Good");
    assert.equal(checkGrid([
        ["X", "X"],
        ["X", "X"]]), false, "2x2 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "Z", "Z"],
        ["X", "Z", "X"]]), false, "3x3 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["X", "Z", "X", "Z"]]), false, "2x4 Bad");
    console.log("Use 'Check' to earn sweet rewards!");
}
