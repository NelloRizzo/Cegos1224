import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToString'
})
export class NumberToStringPipe implements PipeTransform {

  private translate(number: number): string {
    if (number == 0) return "zero"
    if (number < 0) return "meno " + this.translate(-number)
    return this.translateNumber(number)
  }

  private translateNumber(n: number): string {
    if (n < 20) return ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici',
      'sedici', 'diciassette', 'diciotto', 'diciannove'][n - 1]
    return 'overflow'
  }

  transform(value: number): string {
    return this.translate(value);
  }

}
