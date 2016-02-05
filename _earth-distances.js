/*
Earth Distances

The War Effort has taken almost all our equipment, so we have to resort to using museum exhibits from the mythical planet Earth. For transporter training we are using an ancient simulation of the Earth. Our archaeologists are not sure why, but for some reason it's been labeled "Globe".

To describe a specific position on the surface of the Earth, we must rely on the geographic coordinate system. The geographic coordinate system is a method used to give every possible location on Earth as specified by a set of numbers or letters. From what we can tell, the most commonly used coordinate system involved latitude and longitude. With this information we can calculate the distance between two points on the surface of this "Globe".

For simplicity’s sake, we will suppose that the Earth is a perfect sphere with a radius of 6,371 kilometers (this gives an error margin of no more than 0.3%). You are given two points as coordinates and must find the shortest distance between these points on the surface of the Earth, measured along the surface of the Earth.

Coordinates are given as a string with the latitude and longitude separated by comma and/or whitespace. Latitude and longitude are represented in the following format: d°m′s″X

In this example, "d" is degrees, "m" is minutes, "s" is seconds as integers, while "X" is "N" (north) or "S" (south) for a latitude and "W" (west) or "E" (east) for a longitude.

The result should be given as a number in kilometers with a precision of ±0.1 (100 metres).

Input: Two arguments. Coordinates as strings.

Output: The distance as a number.

Example:

distance("51°28′48″N 0°0′0″E", "46°12′0″N, 6°9′0″E") // 739.2
distance("90°0′0″N 0°0′0″E", "90°0′0″S, 0°0′0″W") // 20015.1
Precondition:

Correct Earth coordinates.

How it is used:

The concepts presented in this mission are the exact sorts of concepts used in navigational software, enabling a ship or plane to understand where it is, where it must go and how far it has gone. Along the same vein, Global Positioning Satellites use similar principles to provide pinpoint accurate locations to GPS receivers for use in navigation.
*/
"use strict";

var R = 6371;


function distance(first, second) {
    return 1;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function (checked, correct, significantDigits) {
        var precision = Math.pow(0.1, significantDigits);
        return Math.abs(correct - checked) < precision;
    };

    assert(almostEqual(distance("51°28′48″N 0°0′0″E", "46°12′0″N, 6°9′0″E"), 739.2), "From Greenwich to Geneva");
    assert(almostEqual(distance("90°0′0″N 0°0′0″E", "90°0′0″S, 0°0′0″W"), 20015.1), "From South to North");
    assert(almostEqual(distance("33°51′31″S, 151°12′51″E", "40°46′22″N 73°59′3″W"), 15990.2), "Opera Night");
    console.log("Use 'Check' to earn sweet rewards!");
}
