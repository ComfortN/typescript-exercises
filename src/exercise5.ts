import { Calculator } from "./class/calculator.js";

let calc = new Calculator(0, 0);

console.log("Add " + calc.add(2,2));
console.log("Add " + calc.add(2,'b'));
console.log("Subtract: " + calc.subtract(20, 6))
console.log("Multiply: " + calc.multiply(8,9))
console.log("Divide " + calc.divide(75,3))
console.log("Divide " + calc.divide(5,0))
