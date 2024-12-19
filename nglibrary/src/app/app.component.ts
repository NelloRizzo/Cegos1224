import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, StatisticsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nglibrary';
}
