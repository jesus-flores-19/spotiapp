import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  API_Spotify = "https://api.spotify.com/v1"
  
  headers= new HttpHeaders({
    'Authorization': "Bearer BQBzRAWHIIL0BBG7eqM4vlGExiGXwBVZeQsVYx1INiOT1uZyTrchn2FKJTjLU4mEYgvzwMCWxKhFGSnsvjs"
  })


  getNewReleases(){
    return this.http.get(`${this.API_Spotify}/browse/new-releases?country=MX`,{headers: this.headers})
                      .pipe( map(data => data["albums"].items))
  }

  getArtists(termino){
    return this.http.get(`${this.API_Spotify}/search?q=${termino}&type=artist`,{headers: this.headers})
                      .pipe( map(data => data["artists"].items))
  }

  getArtist(id){
    return this.http.get(`${this.API_Spotify}/artists/${id}`,{headers: this.headers})
  }
  getTracks(id){
    return this.http.get(`${this.API_Spotify}/artists/${id}/tracks`,{headers: this.headers})
                      .pipe( map(data => data["artists"].items))
  }
 
}
