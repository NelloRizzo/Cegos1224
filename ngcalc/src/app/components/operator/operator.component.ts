import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  imports: [],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {

  @Input()
  operator?: string
}
