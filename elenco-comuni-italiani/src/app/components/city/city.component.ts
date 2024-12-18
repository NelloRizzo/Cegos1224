import { Component, Input } from '@angular/core';
import { City } from '../../models/cities.model';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {

  @Input()
  city?: City

}
