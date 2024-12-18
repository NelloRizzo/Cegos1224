export class Post {
    constructor(public id: number,
        public title: string,
        public rating?: number,
        public read?: boolean,
        public publishedAt?: Date) { }
}

export const blog: Array<Post> = [
    { id: 1, title: 'Primo articolo', publishedAt: new Date(), rating: 5 },
    { id: 2, title: 'Secondo articolo', read: true, rating: 15 },
    { id: 3, title: 'Terzo articolo', rating: -2 },
    { id: 4, title: 'Quarto articolo', publishedAt: new Date() }]