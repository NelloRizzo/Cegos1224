import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { digitClicked } from '../../../store/calculator.actions';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input()
  digit: string = '0'

  constructor(private store: Store) { }

  handleClick() {
    this.store.dispatch(digitClicked({ digit: Number.parseInt(this.digit) }))
  }
}
