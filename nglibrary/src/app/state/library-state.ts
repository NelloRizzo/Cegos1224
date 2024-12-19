import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Book } from "./models/book";
import { addBook, deleteBook } from "./library-actions";

export interface LibraryState {
    books: Array<Book>
}

const initialState: LibraryState = {
    books: [
        { id: 1, title: 'Libro n. 1', authors: ['Uno solo'], publicationYear: 2024 },
        { id: 2, title: 'Libro n. 2', authors: ['Primo autore', "Secondo autore"], publicationYear: 2024 },
        { id: 3, title: 'Libro n. 3', authors: ['Prova'], publicationYear: 2024 }
    ]
}

const _reducer = createReducer(
    initialState,
    on(addBook, (state: LibraryState, book: Book) => ({ ...state, books: [...state.books, book] })),
    on(deleteBook, (state: LibraryState, { id }) => {
        console.log(id)
        return { ...state, books: state.books.filter(b => b.id != id) }
    })
)

export function libraryReducer(state: LibraryState | undefined, action: Action) { return _reducer(state, action) }

export const librarySelector = createFeatureSelector<LibraryState>('library')
export const booksCountSelector = createSelector(librarySelector, s => s.books.length)
export const booksSelector = createSelector(librarySelector, s => s.books)