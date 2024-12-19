import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../state/models/book';
import { Store } from '@ngrx/store';
import { booksSelector } from '../../state/library-state';
import { AsyncPipe, NgFor } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [NgFor, AsyncPipe, BookListItemComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books$: Observable<Array<Book>>

  constructor(private store: Store) {
    this.books$ = store.select(booksSelector)
  }
}
