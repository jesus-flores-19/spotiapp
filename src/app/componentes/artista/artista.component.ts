import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router"
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router} from "@angular/router"

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ["./artista.component.css"]
})
export class ArtistaComponent implements OnInit {

  idArtista: any;
  artista: any = [];
  topTracks: any = [];
  activo: boolean = true;
  rutaPadre: string;

  constructor(public rutaActiva: ActivatedRoute, public service: SpotifyService, public router: Router) { 
    this.idArtista = this.rutaActiva.snapshot.params["id"];
    this.service.getArtist(this.idArtista).subscribe((data: any)=>{
      this.artista = data;
      this.activo = false;
    })
    this.rutaPadre = localStorage.getItem("rutaPadre");
    this.service.getTopTracks(this.idArtista).subscribe((data:any) => {
      this.topTracks = data;
      console.log(this.topTracks);
      
    })
  }

  backNavigation(){
  this.router.navigate([this.rutaPadre]);    
  }

  ngOnInit() {
  }

}
