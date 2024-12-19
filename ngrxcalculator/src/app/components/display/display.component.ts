import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDisplay } from '../../../store/calculator.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-display',
  imports: [AsyncPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  text$: Observable<string>

  constructor(private store: Store) {
    this.text$ = store.select(selectDisplay)
  }
}
