import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQB_ioeTQfiti2SavDadUUo6_3LS81GSzf8rXwkGpUpmkIi1tR9zRK4QVoqaT8PBxLGvjySTmwm14qc-mLM"
    })

    this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    .subscribe(data =>{
      
    }) 
  }
 
}
