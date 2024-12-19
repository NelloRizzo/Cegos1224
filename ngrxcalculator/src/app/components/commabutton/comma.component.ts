import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { commaClicked } from '../../../store/calculator.actions';

@Component({
  selector: 'app-comma',
  imports: [],
  templateUrl: './comma.component.html',
  styleUrl: './comma.component.scss'
})
export class CommaComponent {

  constructor(private store: Store) { }

  handleClick() {
    this.store.dispatch(commaClicked())
  }
}
