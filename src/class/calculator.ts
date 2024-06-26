export class Calculator {

    num1 : number;
    num2 : number;

    constructor (num1 : number, num2 : number) {
        this.num1 = num1;
        this.num2 = num2;
    }


    private isValidNumber(value: any): boolean {
        return typeof value === 'number' && !isNaN(value);
    }

    
    validation(value1 : any, value2 : any): void {
        if (!this.isValidNumber(value1) || !this.isValidNumber(value2)) {
            console.error( "Enter only numbers");
        } else if(value2 === 0 ){
            console.error( "You cannot divide with 0");
            }
    }


    add(num : any, numb :any) : number{
        this.validation(num,numb)
        return num + numb
    }

    subtract (num : any, numb :any) : number {
        this.validation(num,numb)
        return num - numb                                                                                                                                                                                    
    }

    multiply(num : any, numb :any): number{
        this.validation(num,numb)
        return num * numb
    }

    divide (num : any, numb :any) : number {
        this.validation(num,numb)
        return num / numb                                                                                                                                                                                     
    }


}