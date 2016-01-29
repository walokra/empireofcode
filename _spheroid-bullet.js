/*
Spheroid Bullet

We are going to experiment with various bullet shapes and designs. As basis for our designs, we will use the spheroid. Let's make the preliminary calculations.

We know the height and the width (in centimeters) for this spheroid. You should create a function to calculate the volume (cubic centimeters) and the surface area (square centimeters). The results should be rounded to two decimals.

Spheroids

Tips: Be careful with sin-1x -- this is arcsin.

Input: Two arguments. A height and a width as numbers.
Output: The volume and the surface area as an array of two numbers.

Example:
golf(4, 2) // [8.38, 21.48]
golf(2, 2) // [4.19, 12.57]
golf(2, 4) // [16.76, 34.69]

Precondition:
0 < width < 100
0 < height < 100

Scoring:
Scoring in this mission is based on the number of characters used in your code (comment lines are not counted).

Rank1:
Any code length.

Rank2:
Your code should be shorter than 280 characters.

Rank3:
Your code should be shorter than 180 characters.

How it is used:
This is a simple math task, but we want to introduce you to the ubiquitous spheroid.

For example, the prolate spheroid is the shape of the ball in several sports such as in rugby and Australian football. In American football, a more pointed prolate spheroid is used. Several moons of the Solar system approximate prolate spheroids in shape, though they are actually scalene. Examples of these are Mimas, Enceladus, and Tethys which orbit Saturn and Miranda which orbits Uranus.

Even the true shape of the Earth is an Oblate Spheroid, though it is only very slightly oblate. The diameter from the North Pole to the South Pole (the shortest diameter) is approximately 12,714 km. The equatorial diameter (the longest diameter) is approximately 12,756 km. This is not a big difference, but it does mean the Earth is not quite a sphere.
*/

"use strict";

function golf(height, width){
    var result = [];
    // volume
    var V = 0.524 * Math.pow(width, 2) * height;
    result.push(V.toFixed(2));

    // Area
    // oblate
    if (height < width) {
      var e = 1 - (Math.pow(height/2, 2) / Math.pow(width/2, 2));
      console.log("e=" + e);
      var S = (2 * Math.PI * Math.pow(width/2)) * (1 + ((1-Math.pow(e, 2)) / e * Math.atanh(e)));
      result.push(S.toFixed(2));
    }
    else if (height > width) {
      var e = 1 - (Math.pow(width/2, 2) / Math.pow(height/2, 2));
      console.log("e=" + e);
      var S = (2 * Math.PI * Math.pow(width/2, 2)) * (1 + ((height/2 / (width/2 * e)) * Math.asin(e)));
      result.push(S.toFixed(2));
    }

    console.log("result=" + result);
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
   // These "asserts" using only for self-checking and not necessary for auto-testing
   assert.deepEqual(golf(4, 2), [8.38, 21.48], "1st example");
   assert.deepEqual(golf(2, 2), [4.19, 12.57], "2nd example");
   assert.deepEqual(golf(2, 4), [16.76, 34.69], "3rd example");
   console.log("All set? Click 'Check' to review your code and earn rewards!");
}
