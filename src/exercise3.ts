function sum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum(8, 10)); 


function fixedNumber(): number {
    return 10;
}

console.log(fixedNumber()); 


function formatString(str: string, upperCase?: boolean): string {
    if (upperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(formatString("typescript"));
console.log(formatString("Typescript", true));
