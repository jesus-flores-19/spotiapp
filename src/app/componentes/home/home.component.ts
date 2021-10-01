import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any = [];
  activo: boolean = true;

  constructor(public spotify: SpotifyService) {
    this.getNewRel()
  }

  getNewRel(){
    this.spotify.getNewReleases().subscribe((data: any) =>{
      this.nuevasCanciones = data;
      this.activo =false;
    }) 
  }

  ngOnInit() {
  }

}
