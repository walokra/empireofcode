/*
Count Neighbours

For maximum damage, a gunlayer should choose a point where enemies are concentrated.

We'll develop a life-like training program to practice this, based on cellular automata. In cellular automata, the Moore neighborhood comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, the pioneer of cellular automata theory.

You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with an enemy and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many enemies are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.

|-----|-----|-----|-----|-----|
|     |. . .|. . .|. . .|     |
|  X  |.   .|. X .|.   .|     |
|     |. . .|. . .|. . .|     |
|-----|-----|-----|-----|-----|
|     |. . .|* * *|. . .|     |
|     |. X .|*   *|.   .|     |
|     |. . .|* * *|. . .|     |
|-----|-----|-----|-----|-----|
|     |. . .|. . .|. . .|     |
|     |.   .|. X .|.   .|  X  |
|     |. . .|. . .|. . .|     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|  X  |     |     |     |     |
|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |  X  |     |     |
|     |     |     |     |     |
|-----|-----|-----|-----|-----|


|-----|-----|-----|-----|-----|
|* * *|. . .|     |     |     |
|* X *|.   .|  X  |     |     |
|* * *|. . .|     |     |     |
|-----|-----|-----|-----|-----|
|. . .|. . .|     |     |     |
|.   .|. X .|     |     |     |
|. . .|. . .|     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |  X  |     |  X  |
|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|  X  |     |     |     |     |
|     |     |     |     |     |
|-----|-----|-----|-----|-----|
|     |     |     |     |     |
|     |     |  X  |     |     |
|     |     |     |     |     |
|-----|-----|-----|-----|-----|

For the given examples (see the schema) there is the same grid:

((1, 0, 1, 0, 0),
 (0, 1, 0, 0, 0),
 (0, 0, 1, 0, 1),
 (1, 0, 0, 0, 0),
 (0, 0, 1, 0, 0),)

For the first example, the coordinates of the cell are (1, 2) and as we can see from the schema this cell has 3 neighbour enemies. For the second example the coordinates are (0, 0) and this cell contains an enemy, but we are only counting the neighbours so the answer is 1.

Input: Three arguments. A grid as an array of arrays with integers (1/0), a row number and column number for a cell as integers.
Output: How many neighbouring cells have chips as an integer.

Example:
count_neighbours([[1, 0, 0, 1, 0],
                  [0, 1, 0, 0, 0],
                  [0, 0, 1, 0, 1],
                  [1, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0]], 1, 2) == 3

count_neighbours([[1, 0, 0, 1, 0],
                  [0, 1, 0, 0, 0],
                  [0, 0, 1, 0, 1],
                  [1, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0]], 0, 0) == 1

Precondition:
3 ≤ |grid| ≤ 10
∀ row ∈ grid: |grid[0]| = |row|

How it is used:
This idea can be useful for developing board game algorithms. In addition, the same principles it can be useful for navigational software, or geographical surveying software or even basic cellular reproduction.
*/

"use strict";

function countNeighbours(grid, row, col){

  var neighbours = 0;
  var crow = 0;
  var ccol = 0;

  for (var i=-1; i <= 1; i++) {
    var check_row = row + i;

    if (check_row >= 0 && check_row <= grid.length-1) {
      if (col-1 >= 0) {
        if (grid[check_row][col-1] === 1) neighbours++;
      }

      if (check_row !== row || col != col) {
        if (grid[check_row][col] === 1) neighbours++;
      }

      if (col+1 <= grid[check_row].length-1) {
        if (grid[check_row][col+1] === 1) neighbours++;
      }
    }
  }

  // console.log("neighbours=" + neighbours);

  return neighbours;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");
    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");
    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    assert.equal(countNeighbours([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1, 1), 0, "");

    assert.equal(countNeighbours([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 2), 5, "");

    assert.equal(countNeighbours([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 5, 5), 7, "");

    assert.equal(countNeighbours([[1, 0, 1, 0, 1],
                                  [0, 1, 0, 1, 0],
                                  [1, 0, 1, 0, 1],
                                  [0, 1, 0, 1, 0],
                                  [1, 0, 1, 0, 1],
                                  [0, 1, 0, 1, 0]], 5, 4), 2, "");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
