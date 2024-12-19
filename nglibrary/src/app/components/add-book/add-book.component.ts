import { Component } from '@angular/core';
import { Book } from '../../state/models/book';
import { FormsModule } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { addBook } from '../../state/library-actions';
@Component({
  selector: 'app-add-book',
  imports: [FormsModule, RouterLink, NgFor],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {

  book: Book = { id: 0, title: '', authors: [], publicationYear: 0 }
  newauthor: string = ''

  constructor(private store: Store, private router: Router) { }

  addBook() {
    this.store.dispatch(addBook(this.book))
    this.router.navigateByUrl('/books')
  }
  addAuthor() {
    this.book.authors.push(this.newauthor)
    this.newauthor = ''
  }
}
