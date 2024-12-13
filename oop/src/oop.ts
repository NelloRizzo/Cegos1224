export default class Person {
    private _name: string
    private _surname: string

    public get fullName(): string { return `${this._name} ${this._surname}` }
    public set name(name: string) { this._name = name }

    constructor(name: string, surname: string) {
        this._name = name
        this._surname = surname
    }

    saluta() {
        console.log("Ciao", this.fullName)
    }
}