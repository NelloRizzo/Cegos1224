import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent},
    { path: 'books/add', component: AddBookComponent},
    { path: '', redirectTo: '/books', pathMatch: 'full'}
];
