import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'doomseguro'
})
export class DoomseguroPipe implements PipeTransform {

  ruta:string;

  constructor(private doomSan: DomSanitizer){
    this.ruta = "https://open.spotify.com/embed/?uri="
  }

  transform(value: any, ...args: any[]): any {
    return this.doomSan.bypassSecurityTrustResourceUrl(`${this.ruta}${value}`);
  }

}
