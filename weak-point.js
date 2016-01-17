/*
Weak Point

For a sniper it's very important to find the weak point in a target. Based on some intel gathered in the field, we've been able to construct a durability map for the enemy armor.

The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell. To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should find coordinates of the weakest point (row, column). The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.

    20  30  22  19  25
  |---|---|---|-*-|---|
27| 7 | 2 | 7 | 3 | 8 |
  |---|---|---|-*-|---|
23| 2 | 9 | 4 | 1 | 7 |
  |---|---|---|-*-|---|
23| 3 | 8 | 6 | 2 | 4 |
  |---|---|---|-*-|---|
19* 2 * 5 * 2 **9** 1 *
  |---|---|---|-*-|---|
26| 6 | 6 | 5 | 4 | 5 |
  |---|---|---|-*-|---|

  Weak point (4, 4)

    20  29  19  19  25
  |---|---|-*-|-*-|---|
27| 7 | 2 | 7 | 3 | 8 |
  |---|---|-*-|-*-|---|
19* 2 * 8 **1** 1 * 7 *
  |---|---|-*-|-*-|---|
23| 3 | 8 | 6 | 2 | 4 |
  |---|---|-*-|-*-|---|
19* 2 * 5 * 2 * 9 * 1 *
  |---|---|-*-|-*-|---|
26| 6 | 6 | 5 | 4 | 5 |
  |---|---|-*-|-*-|---|

  Weak point (1, 2)

Input: A durability map as an array of arrays with integers.
Output: The coordinates of the weak point as an array of integers.

Example:
golf([[7, 2, 7, 2, 8],
      [2, 9, 4, 1, 7],
      [3, 8, 6, 2, 4],
      [2, 5, 2, 9, 1],
      [6, 6, 5, 4, 5]]) // [3, 3]

golf([[7, 2, 4, 2, 8],
      [2, 8, 1, 1, 7],
      [3, 8, 6, 2, 4],
      [2, 5, 2, 9, 1],
      [6, 6, 5, 4, 5]]) // [1, 2]

Precondition:

0 < len(matrix) <= 10
all(len(row) == len(matrix) for row in matrix)
all(all(0 < x < 10 for x in row) for row in matrix)

Scoring:
In this mission the main goal to make your code as short as possible. The shorter your code, the more points you earn. Your score for this mission is dynamic and directly related to the length of your code.

Scoring in this mission is based on the number of characters used in your code (comment lines are not counted).

Rank1:
Any code length.

Rank2:
Your code should be shorter than 175 characters.

Rank3:
Your code should be shorter than 125 characters.

How it is used:
Matrices (2D array) are an often used data structure and it will be helpful to sharpen your skills with them.
*/
"use strict"
function golf(matrix) {
  var weakpoint = new Array(2);

  var rowsum, colsum;
  for(var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    var rsum = 0, csum = 0;
    console.log("row=", row);
    for(var j = 0; j < row.length; j++) {
      rsum += matrix[i][j];
      csum += matrix[j][i];
    }
    console.log("rsum=", rsum, "; rowsum=", rowsum);
    if (!rowsum || rsum < rowsum) {
      rowsum = rsum;
      weakpoint[0] = i;
    }
    console.log("csum=", csum, "; colsum=", colsum);
    if (!colsum || csum < colsum) {
      colsum = csum;
      weakpoint[1] = i;
    }
  }

  console.log("weakpoint=", weakpoint);
  return weakpoint;
}

function golfwhile(matrix) {
  var w = Array(2);

  var rowsum = 0, colsum = 0, i = 0
  while (i < matrix.length) {
    var row = matrix[i], rsum = 0, csum = 0, j=0;
    while (j < row.length) {
      rsum += matrix[i][j];
      csum += matrix[j][i];
      j++
    }
    if (rowsum === 0 || rsum < rowsum) {
      rowsum = rsum;
      w[0] = i;
    }
    if (colsum === 0 || csum < colsum) {
      colsum = csum;
      w[1] = i;
    }
    i++
  }
  console.log("weakpoint=", w);
  return w;
}

function golf2(m,w,x,y,r,c,l,i,j) {
  w=[];
  l=m.length;
  for(i=l;i--;){
    r=c=0;
    for(j=l;j--;){
      r+=m[i][j];
      c+=m[j][i];
    }
    if(!x||r<=x)x=r,w[0]=i;
    if(!y||c<=y)y=c,w[1]=i;
  }
  return w;
}

function golfmin(m,i,j,x,y,r,c,w){w=Array();for(i=0;i<m.length;i++){r=c=0;for(j=0;j<m[i].length;j++)r+=m[i][j],c+=m[j][i];if(!x||r<x)x=r,w[0]=i;if(!y||c<y)y=c,w[1]=i}return w}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    //20  30 24 18; 26  23  23  19
    assert.deepEqual(golf2([
        [7, 2, 7, 2, 8],
        [2, 9, 4, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]]), [3, 3], 'First');
    assert.deepEqual(golf2([
        [7, 2, 4, 2, 8],
        [2, 8, 1, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]]), [1, 2], "Second");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
