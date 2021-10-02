import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  idArtista: any;
  artista: any = [];
  urll: any;

  constructor(public rutaActiva: ActivatedRoute, public service: SpotifyService) { 
    this.idArtista = this.rutaActiva.snapshot.params["id"];
    this.service.getArtist(this.idArtista).subscribe((data: any)=>{
      this.artista = data;
    })
  }

  ngOnInit() {
  }

}
