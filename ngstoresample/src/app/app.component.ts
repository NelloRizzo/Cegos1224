import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectorCounter } from './store/counter.selector';
import { CounterState } from './store/counter.reducer';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count$: Observable<number>

  constructor(private store: Store<CounterState>) { this.count$ = this.store.select(selectorCounter) }

  increment() { this.store.dispatch(increment()) }

  decrement() { this.store.dispatch(decrement()) }
  
  reset() { this.store.dispatch(reset()) }
}
