import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<number>, spec: "odds" | "even" = "even", limit: number = 100): Array<number> {
    return value
      .filter(v => spec === 'even' ? v % 2 == 0 : v % 2 != 0)
      .filter(v => v <= limit)
  }

}
