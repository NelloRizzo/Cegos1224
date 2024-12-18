import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/cities.model';

@Pipe({
  name: 'gMapUrl'
})
export class GMapUrlPipe implements PipeTransform {

  transform(value: City): string {
    return `http://maps.google.com?q=${value.nome}`;
  }

}
