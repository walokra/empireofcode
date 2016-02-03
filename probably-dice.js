/*
Probably Dice

Battle is full of randomnesses. You should observe randomness in a controlled setting to prepare for this inevitability. We'll start by rolling the dice.

Typically, when using multiple dice, you simply roll them and sum up all the result. To get started with your investigation of dice probability, write a function that takes the number of dice, the number of sides per die and a target number and returns the probability of getting a total roll of exactly the target value. The result should be given with four digits precision as ±0.0001. For example, if you roll 2 six-sided dice, the probability of getting exactly a 3 is 2/36 or 5.56%, which you should return as ≈0.0556.

Image

For each test, assume all the dice are the same and are numbered from 1 to the number of sides, inclusive. So a 4-sided die (D4) would have an equal chance of rolling a 1, 2, 3 or 4. A 20-sided die (D20) would have an equal chance of rolling any number from 1 to 20.

Tips: Be careful if you want to use a brute-force solution -- you could have a very, very long wait for edge cases.

Input: Three arguments. The number of dice, the number of sides per die and the target number as integers.
Output: The probability of getting exactly target number on a single roll of the given dice as a number.

Example:
probability(2, 6, 3) // 0.0556  # 2 six-sided dice have a 5.56% chance of totalling 3
probability(2, 6, 4) // 0.0833
probability(2, 6, 7) // 0.1667
probability(2, 3, 5) // 0.2222  # 2 three-sided dice have a 22.22% chance of totalling 5
probability(2, 3, 7) // 0       # The maximum you can roll on 2 three-sided dice is 6
probability(3, 6, 7) // 0.0694
probability(10, 10, 50) // 0.0375

Precondition:
1 ≤ dice_number ≤ 10
2 ≤ sides ≤ 20
0 ≤ target < 1000

How it is used:
This task illustrates basic probability. Many events can be described as the combination of other events. In this case you're combining several dice into one total to crit the Orc King for massive damage.
*/
"use strict";

function probability(diceNumber, sides, target) {
	// console.log("diceNumber=" + diceNumber + "; sides=" + sides + "; target=" + target);
	
	var possibilities = Math.pow(sides, diceNumber);
	var rows = diceNumber + 1;
	var cols = target + 1;
	
	var table = [], row = [];
	while (cols--) row.push(0);
	while (rows--) table.push(row.slice());
	  	
	// Table entries for only one dice
	for (var j = 1; j <= sides && j <= target; j++) {
        table[1][j] = 1;
	}
	
	// Fill rest of the entries in table using recursive relation
    // i: number of dice, j: sum
    for (var i = 2; i <= diceNumber; i++) {
        for (var j = 1; j <= target; j++) {
            for (var k = 1; k <= sides && k < j; k++) {
                table[i][j] += table[i-1][j-k];
			}
		}
	}
	
// for (var i = 0; i <= diceNumber; i++) {
// 		for (var j = 0; j <= target; j++) {
// 			console.log(table[i][j]);
// 		}
// 	}
	
	// console.log(table[diceNumber][target] + " / " + possibilities);
	
	var result = table[diceNumber][target] / possibilities;
	
	return result;
}

var assert = require("assert");

if (!global.is_checking) {
    // These are only used for self-checking and are not necessary for auto-testing
    var almostEqual = function (actual, expected, significantDigits) {
        significantDigits = significantDigits || 4;
        var precision = Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;

    };

    assert(almostEqual(probability(2, 6, 3), 0.0556), "Basic example");
    assert(almostEqual(probability(2, 6, 4), 0.0833), "More points");
    assert(almostEqual(probability(2, 6, 7), 0.1667), "Maximum for two 6-sided dice");
    assert(almostEqual(probability(2, 3, 5), 0.2222), "Small dice");
    assert(almostEqual(probability(2, 3, 7), 0.0000), "Never!");
    assert(almostEqual(probability(3, 6, 7), 0.0694), "Three dice");
    assert(almostEqual(probability(10, 10, 50), 0.0375), "Many dice, many sides");
    console.log("Earn cool rewards by using the 'Check' button!");
}