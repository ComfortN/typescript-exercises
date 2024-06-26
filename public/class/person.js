export class Person {
    constructor(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    personName() {
        return this.name;
    }
    personAge() {
        return this.age;
    }
}
export default Person;
