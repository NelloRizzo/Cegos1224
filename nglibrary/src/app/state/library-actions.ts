import { createAction, props } from "@ngrx/store";
import { Book } from "./models/book";

export const addBook = createAction('[Library] Add Book', props<Book>())
export const deleteBook = createAction('[Library] Delete Book By Id', props<{ id: number }>())