/*
Triangle Angles

Most of the facets on a crystal are triangle. Since these crystals are vital to our base, we should attempt to learn more about this shape.

You are given the lengths for each side of a triangle. You need to find all three of the angles for this triangle. If the given side lengths cannot form a triangle (or form a degenerated triangle), then you must return all angles as 0 (zero). The angles should be represented as a list of integers in ascending order. Each angle is measured in degrees and rounded to the nearest integer number using standard mathematical rounding.

Input: The lengths of the sides of a triangle as integers.
Output: Angles of a triangle in degrees as sorted array of integers.

Example:
angles(4, 4, 4) // [60, 60, 60]
angles(3, 4, 5) // [37, 53, 90]
angles(2, 2, 5) // [0, 0, 0]

Precondition:
0 < a ≤ 1000
0 < b ≤ 1000
0 < c ≤ 1000

How it is used:
This is a classical geometry problem. With this concept you can measure an angle without the need for a protractor for use in fields such as topography or architecture.
*/
"use strict";

function angles(a, b, c){
  // use The Law of Cosines first to calculate one of the angles
  // cos A = (b^2 + c^2 − a^2) / 2bc
  var cosA = ((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2))) / (2 * b * c);
  // console.log("cosA=" + cosA);
  var A = Math.acos(cosA);
  // trigonometric functions return angles in radians
  // convert radians to degrees, divide by (Math.PI / 180)
  A = A / (Math.PI / 180);
  // console.log("A=" + A);

  // then use The Law of Cosines again to find another angle
  // cos B = (c2 + a2 − b2)/2ca
  var cosB = ((Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2))) / (2 * c * a);
  // console.log("cosB=" + cosB);
  var B = Math.acos(cosB);
  B = B / (Math.PI / 180);
  // console.log("B=" + B);

  // finally use angles of a triangle add to 180° to find the last angle.
  // C = 180° − A − B
  var C = 180 - A - B;
  // console.log("C=" + C);
  var result = [];
  result.push(Math.round(A));
  result.push(Math.round(B));
  result.push(Math.round(C));

  // console.log("result=" + result);
  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    return [0, 0, 0];
  } else if (A === 0 || B === 0 || C === 0) {
    return [0, 0, 0];
  }

  return result.sort(function(a, b) {
    return a - b;
  });
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(angles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(angles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(angles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    assert.deepEqual(angles(11, 20, 30), [11,20,149], "Ordnung muss sein");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
