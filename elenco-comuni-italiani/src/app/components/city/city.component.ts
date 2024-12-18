import { Component, Input } from '@angular/core';
import { City } from '../../models/cities.model';
import { GMapUrlPipe } from '../../pipes/gmap-url.pipe';

@Component({
  selector: 'app-city',
  imports: [GMapUrlPipe],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {

  @Input()
  city?: City

}
