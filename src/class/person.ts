export class Person {

    name :string;
    age : number;
    private socialSecurityNumber : number;

    constructor (name: string, age :number, socialSecurityNumber : number) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;

    }


    personName () :string{
        return this.name
    }


    personAge() : number{
        return this.age
    }


}
export default Person;