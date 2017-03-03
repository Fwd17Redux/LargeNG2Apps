import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';

@Pipe({
  name: 'dcsPrice'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      value = 0;
    }
    return numeral(value).format('0,0.00 $');
  }

}
