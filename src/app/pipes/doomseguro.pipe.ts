import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
