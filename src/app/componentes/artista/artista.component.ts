import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  idArtista: any;

  constructor(public rutaActiva: ActivatedRoute) { 
    this.idArtista = this.rutaActiva.snapshot.params["id"];
  }

  ngOnInit() {
  }

}
