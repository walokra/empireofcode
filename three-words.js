/*
Three Words

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.
Output: The answer as a boolean.

Example:
threeWords("Hello World hello") == true
threeWords("He is 123 man") == false
threeWords("1 2 3 4") == false
threeWords("bla bla bla bla") == true
threeWords("Hi") == false

Precondition:
The input contains words and/or numbers. There are no mixed words (letters and digits combined).
0 < |words| < 100

How it is used:
This teaches you how to work with strings and introduces some useful functions.
*/

"use strict";

function threeWords(words) {
  var arr = words.split(' ');
  // console.log("arr=",arr)

  var count = 0;
  for (var i in arr) {
    var word = arr[i];
    // console.log("word=",word);
    if (/[A-Za-z]/.test(word)) {
      count++;
    } else {
      count = 0;
    }
    if (count >= 3) return true
  }

  return false;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(threeWords("Hello World hello"), true, "Hello");
    assert.equal(threeWords("He is 123 man"), false, "123 man");
    assert.equal(threeWords("1 2 3 4"), false, "Digits");
    assert.equal(threeWords("bla bla bla bla"), true, "Bla Bla");
    assert.equal(threeWords("Hi"), false, "Hi");
    assert.equal(threeWords("one two 3 four five six 7 eight 9 ten eleven 12"), true, "One");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
