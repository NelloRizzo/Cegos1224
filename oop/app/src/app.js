import Person from "./oop.js";
class Student extends Person {
    get fullName() { return 'Studente: ' + super.fullName; }
    constructor(name, surname) {
        super(name, surname);
    }
}
const use = (p) => { console.log(p.fullName); };
document.addEventListener('DOMContentLoaded', () => {
    const p = new Person('Archimede', 'Pitagorico');
    const s = new Student('Pico', "De' Paperis");
    use(p);
    use(s);
});
