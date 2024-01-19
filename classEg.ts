type Person = {
    name: string;
    work: string;
    charges: number
}

class Invoice implements Person {

    constructor(public name: string, public work: string, public charges: number) {

    }

    format(): string {
        return `Name: ${this.name} work done: ${this.work} and charges: $${this.charges}`
    }

}
const invOne = new Invoice("Lalit", "Frontend", 500)

console.log(invOne)
console.log(invOne.format())