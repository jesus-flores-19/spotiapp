import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: []
})
export class TarjetaComponent implements OnInit {

  @Input() elemento: any = [];

  constructor() { }

  verArtista( item: any ){
    let artistaId;
    if(item.type === "artist"){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id
    }
    console.log(artistaId);
    
  }

  ngOnInit() {
  }

}
