export class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    isValidNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    validation(value1, value2) {
        if (!this.isValidNumber(value1) || !this.isValidNumber(value2)) {
            console.error("Enter only numbers");
        }
        else if (value2 === 0) {
            console.error("You cannot divide with 0");
        }
    }
    add(num, numb) {
        this.validation(num, numb);
        return num + numb;
    }
    subtract(num, numb) {
        this.validation(num, numb);
        return num - numb;
    }
    multiply(num, numb) {
        this.validation(num, numb);
        return num * numb;
    }
    divide(num, numb) {
        this.validation(num, numb);
        return num / numb;
    }
}
