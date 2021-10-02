import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: []
})
export class TarjetaComponent implements OnInit {

  @Input() elemento: any = [];
  @Input() rutaPadre: string;

  constructor(public router: Router) { }

  verArtista( item: any ){
    let artistaId;
    if(item.type === "artist"){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id
    }
    localStorage.setItem("rutaPadre", this.rutaPadre)
    this.router.navigate(["artista", artistaId]);
    
  }

  ngOnInit() {
  }

}
