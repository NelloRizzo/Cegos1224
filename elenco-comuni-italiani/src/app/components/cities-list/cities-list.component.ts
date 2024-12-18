import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/cities.model';
import { CityComponent } from '../city/city.component';
import { CommonModule } from '@angular/common';
import { NameFilterPipe } from '../../pipes/name-filter.pipe';
@Component({
  selector: 'app-cities-list',
  imports: [FormsModule, CityComponent, CommonModule, NameFilterPipe],
  templateUrl: './cities-list.component.html',
  styleUrl: './cities-list.component.scss'
})
export class CitiesListComponent implements OnInit {

  name?: string
  cities: Array<City> = []

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCities().subscribe(data => this.cities = data)
  }
}
