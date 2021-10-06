import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(public service: SpotifyService) { 
  }

  ngOnInit() {
  }


  artistas: any = [];
  activo: boolean = false;
  error: boolean = false;
  mensajeError: string;


  buscar(termino: string){
    if(termino){
      this.activo =true;
      this.service.getArtists(termino).subscribe((data:any)=>{
        this.artistas=data;
        this.activo =false;
      }, (error: any) => {
        this.error = true;
        this.activo = false;
        this.mensajeError = error.error.error.message
      }) 
    }else{
      this.artistas = [];
    }
  }

}
