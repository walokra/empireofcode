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

function golf_long(height, width){
    // http://mathworld.wolfram.com/ProlateSpheroid.html
    // https://en.wikipedia.org/wiki/Spheroid
    var result = [];
    var c = height / 2;
    var a = width / 2;

    // volume
    var V = ((4 * Math.PI)/3) * Math.pow(a, 2) * c
    // var V = 0.5239 * Math.pow(width, 2) * height;
    result.push(V.toFixed(2));

    // Area
    // oblate
    if (c < a) {
      var e2 = 1 - (Math.pow(c, 2) / Math.pow(a, 2));
      var e = Math.sqrt(e2);
      console.log("oblate, e2=" + e2 + "; e=" + e);
      var S = (2 * Math.PI * Math.pow(a, 2)) * (1 + ((1-Math.pow(e, 2)) / e * Math.atanh(e)));
      result.push(S.toFixed(2));
    }
    // prolate
    else if (c > a) {
      var e2 = 1 - (Math.pow(a, 2) / Math.pow(c, 2));
      var e = Math.sqrt(e2);
      // console.log("prolate, e=" + e2 + "; e=" + e);
      var S = (2 * Math.PI * Math.pow(a, 2)) * (1 + ((c / (a * e)) * Math.asin(e)));
      result.push(S.toFixed(2));
    }
    // sphere
    else if (c === a) {
      // console.log("sphere=" + a);
      var S = 4 * Math.PI * Math.pow(a, 2);
      result.push(S.toFixed(2));
    }

    console.log("result=" + result);
    return result;
}

function golf_clear(h, w){
    var c = h / 2, a = w / 2, m = Math, i = m.PI, q = m.sqrt, p = m.pow, r=m.round, e, V, S, j = p(c, 2), k = p(a, 2), l = 2 * i * k ;
    V = ((4 * i)/3) * p(a, 2) * c

    if (c < a) {
      e = q(1 - j / k);
      S = l * (1 + (1-p(e, 2)) / e * m.atanh(e));
    }
    else if (c > a) {
      e = q(1 - k / j);
      S = l * (1 + c / (a * e) * m.asin(e));
    }
    else {
      S = 4 * i * k;
    }
    return [r(V*100)/100, r(S*100)/100];
}

function golf(a,n){var r,t,o,u=a/2,c=n/2,e=Math,f=e.PI,h=e.sqrt,i=e.pow,l=e.round,s=i(u,2),d=i(c,2),g=2*f*d;return t=4*f/3*i(c,2)*u,c>u?(r=h(1-s/d),o=g*(1+(1-i(r,2))/r*e.atanh(r))):u>c?(r=h(1-d/s),o=g*(1+u/(c*r)*e.asin(r))):o=4*f*d,[l(100*t)/100,l(100*o)/100]}

var assert = require('assert');

if (!global.is_checking) {
   // These "asserts" using only for self-checking and not necessary for auto-testing
   assert.deepEqual(golf(4, 2), [8.38, 21.48], "1st example");
   assert.deepEqual(golf(2, 2), [4.19, 12.57], "2nd example");
   assert.deepEqual(golf(2, 4), [16.76, 34.69], "3rd example");
   console.log("All set? Click 'Check' to review your code and earn rewards!");
}
