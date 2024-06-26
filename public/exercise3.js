"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(8, 10));
function fixedNumber() {
    return 10;
}
console.log(fixedNumber());
function formatString(str, upperCase) {
    if (upperCase) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}
console.log(formatString("typescript"));
console.log(formatString("Typescript", true));
