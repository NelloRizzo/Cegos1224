import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CitiesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elenco-comuni-italiani';
}
