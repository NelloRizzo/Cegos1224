import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { operatorClicked } from '../../../store/calculator.actions';

@Component({
  selector: 'app-operator',
  imports: [],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {

  @Input()
  operator: string = '='

  @Input()
  operation: string = '='

  constructor(private store: Store) { }

  handleClick() {
    this.store.dispatch(operatorClicked({ op: this.operation }))
  }
}
