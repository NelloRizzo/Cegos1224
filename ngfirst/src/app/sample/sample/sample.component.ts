import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sample',
  imports: [FormsModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  @Input()
  message: string = 'Messaggio di default'

  @Output()
  messageModified = new EventEmitter<string>()

  onMessageModified() {
    console.log("Event emitter", this.message)
    this.messageModified.emit(this.message)
  }
}
