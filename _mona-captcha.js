/*
Mona Captcha

DON'T SHOOT OUR OWN TROOPS!!! SIR! It looks like we have problems with the robot's recognition modules.

The Robots use monospaced fonts with low resolution. You can see the font on the picture below. This font has noise immunity to one-pixel error.

Font

Your program should read the number shown in an image encoded as a binary matrix. Each digit can contain a wrong pixel, but no more than one for each digit. The space between digits is equal to one pixel (just think about "1" which is narrower than other letters, but has a width of 3 pixels).

Captcha

Input: An image as an array of arrays with 1 or 0.

Output: The number as an integer.

Example:

recognize([[0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
     [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
     [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
     [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0]]) == 394
recognize([[0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
     [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
     [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
     [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
     [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0]]) == 394
Precondition:

matrix_rows = 5

5 ≤ matrix_columns < 30

digit_width = 3

digits_space = 1

Each digit contains no more than one wrong pixel.

How it is used:

This task will show you how optical character recognition works and will familiarize you with low-resolution fonts requiring noise-immunity. This can be useful for the systems that required the reliability.
*/
"use strict";

var FONT = [
    "--X--XXX-XXX-X-X-XXX--XX-XXX-XXX--XX-XX--",
    "-XX----X---X-X-X-X---X-----X-X-X-X-X-X-X-",
    "--X---XX--X--XXX-XX--XXX--X--XXX-XXX-X-X-",
    "--X--X-----X---X---X-X-X-X---X-X---X-X-X-",
    "--X--XXX-XXX---X-XX---XX-X---XXX-XX---XX-"
];


function recognize(image) {
    return 1;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(recognize([
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0]]), 394, "394 clear");
    assert.equal(recognize([
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0]]), 394, "again 394 but with noise");
    console.log("All done? Earn rewards by using the 'Check' button!");
}