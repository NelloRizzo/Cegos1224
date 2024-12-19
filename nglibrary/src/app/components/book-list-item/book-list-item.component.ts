import { Component, Input } from '@angular/core';
import { Book } from '../../state/models/book';
import { Store } from '@ngrx/store';
import { deleteBook } from '../../state/library-actions';

@Component({
  selector: 'app-book-list-item',
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.scss'
})
export class BookListItemComponent {

  @Input()
  book?: Book

  constructor(private store: Store) { }

  deleteBook() {
    console.log('click', this.book)
    this.store.dispatch(deleteBook({ id: this.book!.id }))
  }
}
