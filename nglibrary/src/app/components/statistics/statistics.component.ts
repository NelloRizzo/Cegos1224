import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { booksCountSelector, librarySelector } from '../../state/library-state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-statistics',
  imports: [AsyncPipe],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

  count$: Observable<number>

  constructor(private store: Store) {
    this.count$ = store.select(booksCountSelector)
  }
}
