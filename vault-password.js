/*
Vault Password

We've installed a new vault to contain our valuable resources and treasures, but before we can put anything into it, we need a suitable password for our new vault. One that should be as safe as possible.

The password will be considered strong enough if its length is greater than or equal to 10 characters, it contains at least one digit, as well as at least one uppercase letter and one lowercase letter. The password may only contain ASCII latin letters or digits, no punctuation symbols.

You are given a password. We need your code to verify if it meets the conditions for a secure password.

In this mission the main goal to make your code as short as possible. The shorter your code, the more points you earn. Your score for this mission is dynamic and directly related to the length of your code.

Input: A password as a string.

Output: A determination if the password safe or not as a boolean, or any data type that can be converted and processed as a boolean. When the results process, you will see the converted results.

Example:
golf('A1213pokl') === false
golf('bAse730onE') === true
golf('asasasasasasasaas') === false
golf('QWERTYqwerty') === false
golf('123456123456') === false
golf('QwErTy911poqqqq') === true

Precondition:
0 < "password| ≤ 64
password matches by regexp expression "[a-zA-Z0-9]+"

Scoring:
Scoring in this mission is based on the number of characters used in your code (comment lines are not counted).

Rank1:
Any code length.

Rank2:
Your code should be shorter than 230 characters.

Rank3:
Your code should be shorter than 130 characters.

How it is used:
If you are worried about the security of your app or service, you can use this handy code to personally check your users' passwords for complexity. You can further use these skills to require that your users passwords meet or include even more conditions, punctuation or unicode.
*/
"use strict";
function golf_clear(p) {
	if (p.length < 10) return false
	if (!p.match(/^([a-zA-Z0-9]+)$/)) return false
	if (!p.match(/\d/)) return false
	if (!p.match(/[A-Z]/)) return false
	if (!p.match(/[a-z]/)) return false
    return true
}

function golf_semiclear(p) {
	if (p.length < 10 || !p.match(/^([a-zA-Z0-9]+)$/) || !p.match(/\d/) || !p.match(/[A-Z]/) || !p.match(/[a-z]/)) return false
    return true
}

// ^                  // the start of the string
// (?=.*[a-z])        // use positive look ahead to see if at least one lower case letter exists
// (?=.*[A-Z])        // use positive look ahead to see if at least one upper case letter exists
// (?=.*\d)           // use positive look ahead to see if at least one digit exists
// .+                 // gobble up the entire string
// $                  // the end of the string

function golf_normal(p){
	if (p.length < 10 || p.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) return false
	return true
}

function golf(n){return n.length<10||n.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)?!1:!0}

var assert = require('assert');

if (!global.is_checking) {
   // These "asserts" using only for self-checking and not necessary for auto-testing
   assert.equal(golf('A1213pokl'), false, "Short");
   assert.equal(golf('bAse730onE'), true, "Nice");
   assert.equal(golf('asasasasasasasaas'), false, "Only lowers");
   assert.equal(golf('QWERTYqwerty'), false, "Numbers?");
   assert.equal(golf("erer798rew9rew9r7ew987rw"), false, "No uppercase");
   assert.equal(golf("DHJK87DSKJHWW68D"), false, "No lowercase");
   console.log("All done? Earn rewards by using the 'Check' button!");
}