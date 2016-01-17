/*
Broken Reports

We've started using a consistent numbering system to mark all the ingots in our cargo deliveries and everything has worked nicely. Right up until this morning that is. Our reporting systems have crashed and we need to find a way to fix them.

Ingots in each consignment are numbered in the row from A1 to Z9 as A1, A2,..., A9, B1, B2, ..., Z9. Each consignment is marked with the number of the last ingot in it. This lets you define the quantity of ingots by the number of marks.

Our daily report is broken. For some reason all of the commas separating values were removed or replaced with a junk data. We need to figure out which are the good marks in todays report. Each mark will look a little like "LD", where "L" is a capital english letter and "D" is a digit ranging from 1 to 9 (zero indicates junk data).

You are given a report as a chunk of text. Your code needs to find all consignment marks and count the total quantity of ingots. Take the report "ASDA1,BB22D01C1" for example. Here we can find three marks: A1, B2 and C1, so the result is 31.

Input: A broken report as a string.
Output: The total quantity of ingots as an integer.

Example:
golf("ASDA1,BB22D01C1") == 31

Precondition:
report can contains only ASCI letters, digits and commas.

Scoring:
In this mission the main goal is to make your code as short as possible. The shorter your code, the more points you earn. Your score for this mission is dynamic and directly related to the length of your code.

Scoring in this mission is based on the number of characters used in your code (comment lines are not counted).

Rank1:
Any code length.

Rank2:
Your code should be shorter than 150 characters.

Rank3:
Your code should be shorter than 100 characters.

How it is used:
Code golf missions help you to learn special tricks and give you a deeper understanding JavaScript as a language.
*/

"use strict";

function golf_full(brokenReport) {
  var arr = brokenReport.split(',');
  console.log("arr=",arr)
  var sum = 0;

  for(var i=0;i < arr.length; i++){
    var mod = arr[i].split('');
    for(var j=0; j < mod.length-1; j++){
      console.log("mod["+j+"]=",mod[j], "; mod["+(j+1)+"]=",mod[j+1]);
      if (isNaN(mod[j]) && mod[j] == mod[j].toUpperCase() && !isNaN(mod[j+1]) && mod[j+1] != 0) {
        console.log("found! mod["+j+"]=", mod[j], "; mod["+(j+1)+"]=",mod[(j+1)]);
        var letter = (mod[j].charCodeAt(0) - 65)
        sum += parseInt((letter + mod[j+1]) - letter);
        console.log("sum=" + sum);
      }
    }
  }
  console.log("sum=",sum)

  return sum;
}

function golf(r,j,a,m,l,o,p) {
  var a=r.split(','),s=0;
  for(r=a.length;r--;){
    m=a[r].split('');
    for(j=m.length;j--;){
      o=m[j],p=m[j+1]
      if (~o && /[A-Z]/.test(o) && ~p && p^0) l=(o.charCodeAt(0)-65), s+=~~((l+p)-l);
    }
  }
  return s;
}

// 200 chars
// function golf(t,r,e,l,n,o,f){var e=t.split(","),g=0;for(t=e.length;t--;)for(l=e[t].split(""),r=l.length;r--;)o=l[r],f=l[r+1],~o&&/[A-Z]/.test(o)&&~f&&0^f&&(n=o.charCodeAt(0)-65,g+=~~(n+f-n));return g}

var assert = require("assert");
if (!global.is_checking) {
// These "asserts" using only for self-checking and not necessary for auto-testing
   assert.equal(golf_full("ASDA1,BB22D01C1"), 31, "1st example");
   assert.equal(golf_full("B1,C2,D3"), 60, "2nd example");
   assert.equal(golf_full("z9,Z9,Z0"), 234, "3rd example");
   console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}
