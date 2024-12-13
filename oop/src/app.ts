import Person from "./oop.js";

class Student extends Person {
    get fullName(): string { return 'Studente: ' + super.fullName }
    constructor(name: string, surname: string) {
        super(name, surname)
    }
}
const use = (p: Person) => { console.log(p.fullName) }

document.addEventListener('DOMContentLoaded', () => {
    const p = new Person('Archimede', 'Pitagorico')
    const s = new Student('Pico', "De' Paperis")
    use(p)
    use(s)
})