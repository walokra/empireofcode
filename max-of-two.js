/*
Max of Two

Define a function that takes two numbers as arguments and returns the largest of them.

Input: Two arguments as numbers.
Output: Maximum of two.

Example:
myMax(3, 3) == 3
myMax(0, 1) == 1
myMax(3, 2) == 3
*/
"use strict";

function myMax(a, b) {
    return Math.max(a,b);
}

var assert = require('assert');

if (!global.is_checking) {

    assert(myMax(3, 3) == 3, "Circle");
    assert(myMax(0, 1) == 1, "Square");
    assert(myMax(3, 2) == 3, "Rectangle");
    console.log("All set? Click \"Check\" to review your code and earn rewards!");
}
