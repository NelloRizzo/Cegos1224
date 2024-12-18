import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private message: string = 'Guardate che Spettacolo!!!';
  private start: number = 0;

  model = {
    title: 'Prima Applicazione Angular',
    subtitle: this.message,
    timing: 500,
    color: '#000000',
  };

  slider() {
    this.model.subtitle =
      this.message.slice(this.start) + ' ' + this.message.slice(0, this.start);
    if (this.start < this.message.length) this.start++;
    else this.start = 0;
    setTimeout(() => this.slider(), this.model.timing);
  }

  increment() {
    this.model.timing++;
  }
  
  constructor() {
    this.slider();
  }
}
