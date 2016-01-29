/*
Stair Steps

In emergencies, robots will always use staircases instead elevators. Sometimes we drill them in emergency scenarios, but often times it's a boring affair. So we've added little fun to the mix.

There is a staircase with N steps and two platforms; one at the beginning of the stairs and the other at the end. On each step a number is written (ranging from -100 to 100 with the exception of 0.) Zeros are written on both platforms. You start going up the stairs from the first platform, to reach the top on the second one. You can move either to the next step or to the next step plus one. You must find the best path to maximize the sum of numbers on the stairs on your way up and return the final sum.

                         __
                   __   /  |
         ______   /  | | _____
        /      | |  _____|  0
   __  /      _____|  2 
  /  ||  _____| -1
 |  _____| -3
____|  5
  0  
Input: Numbers on stairs as an array of integers.

Output: The final sum for the best path as an integer.

Example:

golf([5, -3, -1, 2]) == 6
golf([5, 6, -10, -7, 4]) == 8
golf([-11, 69, 77, -51, 23, 67, 35, 27, -25, 95]) == 393
golf([-21, -23, -69, -67, 1, 41, 97, 49, 27]) == 125
Precondition:

0 < |steps| ≤ 10

∀ x ∈ steps: -100 < x < 100

Scoring:

In this mission the main goal to make your code as short as possible. The shorter your code, the more points you earn. Your score for this mission is dynamic and directly related to the length of your code.

Scoring in this mission is based on the number of characters used in your code (comment lines are not counted).

Rank1:

Any code length.

Rank2:

Your code should be shorter than 250 characters.

Rank3:

Your code should be shorter than 150 characters.

How it is used:

This is a classical example of an optimization problem. It can show you the difference between the various methods of programming; such as dynamic programming and recursion.
*/
"use strict";

function golf(numbers){
    return 0;
}

// var assert = require("assert");
// if (!global.is_checking) {
//     # These "asserts" using only for self-checking and not necessary for auto-testing
//     assert.equal(golf([5, -3, -1, 2]), 6, "1st example");
//     assert.equal(golf([5, 6, -10, -7, 4]), 8, "2nd example");
//     assert.equal(golf([-11, 69, 77, -51, 23, 67, 35, 27, -25, 95]), 393, "3rd example");
//     assert.equal(golf([-21, -23, -69, -67, 1, 41, 97, 49, 27]), 125, "4th example");
//    console.log("All done? Earn rewards by using the 'Check' button!");
//}

