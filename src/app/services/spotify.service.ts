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
    'Authorization': "Bearer BQBzRH5nKm_wt4qczL8L1iKIT0rN8i2JGHFPqubJuCE1pFKutVK8XfncLlpuvm_us8_47X06kZr9ehTdxwY"
  })


  getNewReleases(){
    return this.http.get(`${this.API_Spotify}/browse/new-releases?country=MX`,{headers: this.headers})
                      .pipe( map(data => data["albums"].items))
  }

  getArtists(termino){
    return this.http.get(`${this.API_Spotify}/search?q=${termino}&type=artist`,{headers: this.headers})
                      .pipe( map(data => data["artists"].items))
  }
 
 
}
