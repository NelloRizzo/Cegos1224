export class Zona {
    constructor(public codice: number, public nome: string) { }
}
export class Regione {
    constructor(public codice: string, public nome: string) { }
}
export class Provincia {
    constructor(public codice: string, public nome: string) { }
}
export class City {

    constructor(public nome: string,
        public codice: string,
        public sigla: string,
        public codiceCatastale: string,
        public cap: Array<string>,
        public popolazione: number,
        public zona: Zona,
        public regione: Regione,
        public provincia: Provincia) { }
}

