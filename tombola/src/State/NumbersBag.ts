export default class NumbersBag {
    private numbers: Array<number>

    get isEmpty(): boolean { return this.numbers.length == 0 }

    getNext(): number {
        if (!this.isEmpty) return this.numbers.pop()!
        return -1;
    }

    constructor() {
        const n: Array<number> = Array.from({ length: 90 }).map((_, i) => i + 1)
        for (let i = 0; i < 1000; ++i) {
            const p1: number = Math.floor(Math.random() * 90)
            const p2: number = Math.floor(Math.random() * 90);
            [n[p1], n[p2]] = [n[p2], n[p1]]
        }
        this.numbers = n
    }
}