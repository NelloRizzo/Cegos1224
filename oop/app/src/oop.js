export default class Person {
    get fullName() { return `${this._name} ${this._surname}`; }
    set name(name) { this._name = name; }
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    saluta() {
        console.log("Ciao", this.fullName);
    }
}
