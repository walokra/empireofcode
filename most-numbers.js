/*
Most Numbers

To check an automated sieve for ore we use a variety of sample sets to find the smallest and the largest stones. The difference between these values is then used to decide if the sample is worth checking.

You are given an array of numbers from which you must find the difference between the maximum and minimum elements. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions, since this is the case, we should check that the result is within 0.001 precision.

Input: An arbitrary number of arguments as numbers.
Output: The difference between the maximum and minimum as a number.

Example:
mostDifference(1, 2, 3) == 2
mostDifference(5, -5) == 10
mostDifference(10.2, -2.2, 0, 1.1, 0.5) == 12.4
mostDifference() == 0

Precondition:
0 ≤ |arguments| ≤ 20

How it is used:
The important concept to learn from this mission is about passing an undefined amount of arguments to functions.
*/
"use strict";

function mostDifference() {
    if (arguments.length < 2) return 0
    //console.log("arguments=",arguments)
    
    var diff, min, max = 0
    var arr = []
    for (elem in arguments) {
        arr.push(arguments[elem]);
    }
    //console.log("arr=",arr)
    
    min = getMinOfArray(arr)
    max = getMaxOfArray(arr)
    diff = max - min
    //console.log("min=",min,"; max=",max,"; diff=",diff)
    
    return diff
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 3;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(mostDifference(1, 2, 3), 2), "3-1=2");
    assert(almostEqual(mostDifference(5, 5), 0), "5-5=0");
    assert(almostEqual(mostDifference(10.2, 2.2, 0.00001, 1.1, 0.5), 10.199), "10.2-(0.00001)=10.19999");
    assert(almostEqual(mostDifference(), 0), "Empty");
    console.log("Use 'Check' to earn sweet rewards!");
}
