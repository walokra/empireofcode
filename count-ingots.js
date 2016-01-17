/*
Count Ingots

To create an accurate accounting of our stock, incoming ingots in cargo shipments are numbered.

Ingots in each consignment are numbered in the row from A1 to Z9 as A1, A2,..., A9, B1, B2, ..., Z9. Each consignment is marked with the number of the last ingot in it. So you can define the quantity of ingots by the number of marks.

You are given a report of daily consignments as number marks written in a string separated by commas. Count the total quantity of ingots. Take the report "A2,B1" for example. Here we can see two consignments with 2 (A2) and 10 (B1) ingots, giving us a result of 12.

Input: A daily report as a string.
Output: The total quantity of ingots as an integer.

Example:
countIngots("A2,B1") == 12
countIngots("A1,A1,A1") == 3
countIngots("Z9,X8,Y7") == 672
countIngots("C1,D1,B1,E1,F1") == 140

Precondition:
report match with regexp expression "[A-Z][1-9](,[A-Z][1-9])*"

How it is used:
This concept uses a modified numeral system and provides you with a basis for working with strings.
*/

"use strict";

function countIngots(report) {
  var arr = report.split(',');
  //console.log("arr=",arr)
  var sum = 0;
  for (var i in arr) {
    var mod = arr[i].split('');
    //console.log("mod1=",mod[0], "; mod2=",mod[1]);
    //console.log("mod1=",(mod[0].charCodeAt(0) - 65), "; mod2=",mod[1]);
    var letter = (mod[0].charCodeAt(0) - 65)
    sum += parseInt((letter + mod[1]) - letter);
  }
  //console.log("sum=",sum)

  return sum;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countIngots("A2,B1"), 12, "Two and ten");
    assert.equal(countIngots("A1,A1,A1"), 3, "One, two, three");
    assert.equal(countIngots("Z9,X8,Y7"), 672, "XYZ");
    assert.equal(countIngots("C1,D1,B1,E1,F1"), 140, "Daily");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
