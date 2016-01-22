/*
Fizz Buzz

To get them ready for storage, we need the worker-bots to sort crystals by 3 or 5 or divide them by the number of edges. To make things easier, we will base our program on the ancient human word game "Fizz buzz".

Our goal is to write a function that will receive a positive integer and return:

The phrase "Fizz Buzz" if the number is divisible by 3 and by 5,
The word "Fizz" if the number is divisible by 3,
The word "Buzz" if the number is divisible by 5,
The number as a string for all other cases.

Input: A number as an integer.
Output: The answer as a string.

Example:
fizzBuzz(15) === "Fizz Buzz"
fizzBuzz(6) === "Fizz"
fizzBuzz(5) === "Buzz"
fizzBuzz(7) === "7"
Precondition:

0 < number ≤ 1000

How it is used:
Here you can learn how to write simple functions and work with if-else statements.
*/
"use strict";

function fizzBuzz(number) {
  // console.log("test: " + number + " % 3", number % 3)
  // console.log("test: " + number + " % 5", number % 5)
  if (!(number % 3) && !(number % 5)) {
    return "Fizz Buzz";
  }
  else if (!(number % 3)) {
    return "Fizz";
  }
  else if (!(number % 5)) {
    return "Buzz";
  }

  return String(number);
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Earn cool rewards by using the 'Check' button!");
}
