import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/cities.model';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Array<City>, containingText?: string): Array<City> {
    if (!containingText) return value
    return value.filter(c => c.nome.indexOf(containingText) > -1)
  }

}
