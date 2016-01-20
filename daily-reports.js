/*
Daily Reports

As we already know for an accurate accounting, all ingots we manufacture are numbered. But days are passing by we're finding that the reports are becoming overwhelming.

Ingots in each consignment are numbered in the row from A1 to Z9 as A1, A2,..., A9, B1, B2, ..., Z9. Each consignment are marked by the last ingots in it. So you can define the quantity of ingots my marks. Each daily report written as consignments of marks in string separated by commas. So you can count the total quantity of ingots for a day.

The full report contain daily reports for several days. Each report is given with a date in the next format: YYYY-MM-DD, where YYYY is year, MM is month, DD is day. Date and report are separated by whitespace. Each date-report are placed on separated lines.

You are given a full report as a multiline text and two dates. You should calculate the total quantity ingots for the days between given dates (including).

For example you are given the next full report and dates:

2015-01-01 A1,B2
2015-01-05 C3,C2,C1
2015-02-01 B4
2015-01-03 Z9,Z9

From: 2015-01-01
To:   2015-01-31

For these dates we see three "good" days: 2015-01-01, 2015-01-03, 2015-01-05.

2015-01-01 == 1 + 11 == 12
2015-01-03 == 21 + 20 + 19 == 60
2015-01-05 == 234 + 234 == 468

So the result is 540.

Input: Three arguments. A full report as a multiline string. A start and end date as strings.
Output: The total quantity of ingots for daily reports between these days as an integer.

Example:

countReports("2015-01-01 A1,B2\n" +
             "2015-01-05 C3,C2,C1\n" +
             "2015-02-01 B4\n" +
             "2015-01-03 Z9,Z9",
             "2015-01-01", "2015-01-31") == 540,

Precondition:
All report lines are correct.

How it is used:
String date representation often appears in various reports and documents. This concept is useful for parsing and process documents.
*/
"use strict";

function countReports(fullReport, fromDate, toDate) {
	var result = 0;
	var lines = fullReport.split('\n');
	for (var i=0; i < lines.length; i++) {
		var line = lines[i];
		// console.log("line=" + line);

		var lineArray = line.split(' ');
		var date = new Date(lineArray[0]);
		if (date >= new Date(fromDate) && date <= new Date(toDate)) {
			var ingots = lineArray[1].split(',');
		  var sum = 0;
		  for (var j in ingots) {
		    var mod = ingots[j].split('');
		    var letter = (mod[0].charCodeAt(0) - 65)
		    sum += parseInt((letter + mod[1]) - letter);
		  }
			result += sum;
			// console.log("result=" + result);
		}
	}

  return result;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countReports(
        "2015-01-01 A1,B2\n" +
        "2015-01-05 C3,C2,C1\n" +
        "2015-02-01 B4\n" +
        "2015-01-03 Z9,Z9",
        "2015-01-01", "2015-01-31"), 540, "Normal");
    assert.equal(countReports(
        "2000-02-02 Z2,Z1\n" +
        "2000-02-01 Z2,Z1\n" +
        "2000-02-03 Z2,Z1",
        "2000-02-04", "2000-02-28"), 0, "Zero");
    assert.equal(countReports("2999-12-31 Z9,A1", "2000-01-01", "2999-12-31"), 235, "Millenium");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
