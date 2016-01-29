/*
Speech Module

Because of your efforts, the robots on the farm have had some calculation functionality restored and can work more effectively. We should continue with our improvements and work on the communication and reporting module. Let's teach the robots to convert numbers into words.

You are given a number as an integer and must convert it to word form in English. All the words in the string must be separated by exactly one space character. Be careful with the spaces, it's hard to see if you might have placed two spaces instead of only one.

For example, 143 => 'one hundred forty three'.

Input: A number as an integer.
Output: The word representation of the number as a string.

Example:
tellNumber(4) === 'four'
tellNumber(143) === 'one hundred forty three'
tellNumber(12) === 'twelve'
tellNumber(101) === 'one hundred one'
tellNumber(212) === 'two hundred twelve'
tellNumber(40) === 'forty'

Precondition:
0 < number < 1000

Optional goal
Rank 2: A number can be zero and negative. For a negative number, append "minus" in front of it.
-1000 < number < 1000

Rank 3: A number can be more than 1000.
-1000000 < number < 1000000

How it is used:
This concept may be useful for the speech synthesis software or automated report systems. The system could also be used when writing a chatbot by assigning words or phrases numerical values and having a system retrieve responses based on those values.
*/

"use strict";

var FIRST_TEN = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var SECOND_TEN = ["ten", "eleven", "twelve", "thirteen", "fourteen",
              "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var OTHER_TENS = ["twenty", "thirty", "forty", "fifty",
              "sixty", "seventy", "eighty", "ninety"];
var HUNDRED = "hundred";
var THOUSAND = "thousand";


function tellNumber(number){
	var words = "";
	var firsts = "";
	var tens = "";
	var hundreds = "";
	var thousands = "";
	var tensthousands = "";
	var hundredsthousands = "";
	var millions = "";
	
    return words;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    // Rank 1
    assert.equal(tellNumber(4), 'four', "1st example" );
    assert.equal(tellNumber(133), 'one hundred thirty three', "2nd example");
    assert.equal(tellNumber(12), 'twelve', "3rd example");
    assert.equal(tellNumber(101), 'one hundred one', "4th example");
    assert.equal(tellNumber(212), 'two hundred twelve', "5th example");
    assert.equal(tellNumber(40), 'forty', "6th example");

    // Rank 2
    assert.equal(tellNumber(-133), 'minus one hundred thirty three', "Minus");
    assert.equal(tellNumber(0), 'zero', "Zero");

    // Rank 3)
    assert.equal(tellNumber(42000),'forty two thousand', "42 many");
    assert.equal(tellNumber(-999999),
            "minus nine hundred ninety nine thousand nine hundred ninety nine", "Abyss");
    console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}
