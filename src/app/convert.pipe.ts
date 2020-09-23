import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: string, how: string): unknown {
    switch (how) {
      case 'u':
        return value.toUpperCase() + ' "2020" ';
      case 'l':
        return value.toLowerCase() + ' "2020" ';
      case 'lu':
        return value.toLocaleLowerCase() + ' "2020" ';
      case 'c':
        return value.charAt(0).toUpperCase() + value.substring(1);

      default:
        return value;
    }
  }
}
