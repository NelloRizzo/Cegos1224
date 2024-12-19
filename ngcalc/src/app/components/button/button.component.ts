import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input()
  text?: string

  @Output()
  clicked: EventEmitter<string> = new EventEmitter<string>()

  handleClick() {
    this.clicked?.emit(this.text)
  }
}
