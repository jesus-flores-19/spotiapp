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
  artistas: any = []


  buscar(termino: string){
    this.service.getArtists(termino).subscribe((data:any)=>{
      this.artistas=data;
      console.log(this.artistas);
    })
  }

}
