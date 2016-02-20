/*
Verify Anagrams

To institute a super secret password-answer security system, we've implemented an anagram policy where all passwords must be anagrams for answers. There's only one problem, we need to verify that people are using proper anagrams in their passwords.

An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once. Two words are anagrams to each other if we can get one from another by rearranging the letters. Anagrams are case-insensitive and don't take whitespaces into account.

For example: "Gram Ring Mop" and "Programming" are anagrams. But "Hello" and "Ole Oh" are not.

You are given two words or phrases. Try to verify if they are anagrams.

Input: Two arguments. Words as strings.
Output: Determination if the passwords are anagrams or not as boolean (True or False).

Example:
verifyAnagrams("Programming", "Gram Ring Mop") === true
verifyAnagrams("Hello", "Ole Oh") === false
verifyAnagrams("Kyoto", "Tokyo") === true

Precondition:
0 < |first_word| < 100
0 < |second_word| < 100

Words contain only ASCII latin letters and whitespaces.

How it is used:

Anagramming can be a fun way to train your brain, but they have other applications. Psychologists use anagram-oriented tests, often called "anagram solution tasks", to assess the implicit memory. Anagrams are often used to create pseudonyms, allowing one to conceal, reveal or operate somewhere in between - like a mask that can establish identity. In addition to this, multiple anagramming is a technique sometimes used to solve some kinds of cryptograms.
*/

"use strict";

function verifyAnagrams2(firstWord, secondWord) {
	// Check if parameters are strings
	if (typeof firstWord !== 'string' || typeof secondWord !== 'string') {
	    throw new Error('isAnagram requires two strings to be passed.')
	}
	
	// Clean up the string, convert to lowercase
	var normalizedWord1 = firstWord.replace(/[^A-Za-z]+/g, '').toLowerCase();
	var normalizedWord2 = secondWord.replace(/[^A-Za-z]+/g, '').toLowerCase();
	
	// Compare length
	var word1Length = normalizedWord1.length;
	var word2Length = normalizedWord2.length;
	if (word1Length !== word2Length) { return false; }

    var counts = [];
	// Add letters in word1 to array
	for (var i = 0; i < word1Length; i++) {
	    var index = normalizedWord1.charCodeAt(i)-97;
	    counts[index] = (counts[index] || 0) + 1;
	}

	// Do the same for word2 and check if they are found
	for (var i = 0; i < word2Length; i++) {
	    var index = normalizedWord2.charCodeAt(i)-97;
	    if (!counts[index]) { return false; }
	    else { counts[index]--; }
	}

	return true;
}

function verifyAnagrams(firstWord, secondWord) {
	// convert strings to lowercase for case insensitivity
	// split strings into arrays
	// sort the arrays (spaces will sort first and be trimmed later)
	// join the arrays back into strings
	// we're only concerned about the printable characters in the anagram so,
	// trim() to remove any spaces and then compare the resulting strings
	var str1 = firstWord.toLowerCase().split('').sort().join('').trim();
	var str2 = secondWord.toLowerCase().split('').sort().join('').trim();

	if (str1 === str2) {
	    return true;
	} else {
	    return false;
	}
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
    assert.equal(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
    assert.equal(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
