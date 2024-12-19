import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {

  transform(value: string, comma?: string): string {
    return value?.replace('.', comma ?? ',') ?? ''
  }

}
