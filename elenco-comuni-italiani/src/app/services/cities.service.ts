import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/cities.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  private apiUrl = "https://raw.githubusercontent.com/matteocontrini/comuni-json/refs/heads/master/comuni.json"

  constructor(private http: HttpClient) { }

  getCities(): Observable<Array<City>> {
    return this.http.get<Array<City>>(this.apiUrl)
  }
}
