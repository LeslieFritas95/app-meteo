import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case 0:
        return './assets/clear.svg';
      case 1:
      case 2:
      case 3:
        return './assets/cloud.svg';
      case 45:
      case 48:
        return './assets/fog.svg';
      default:
        return './assets/clear.svg';
    }
  }

}
