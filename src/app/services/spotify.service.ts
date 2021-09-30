import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQDyQuFhFz_PMMi4n3ZsUlpvShe6UVeZvm4VJxJpJDeZprpJpwLshhkkPKf8YMly6ISRtrCfbvffPz_4Kcg"
    })

    return this.http.get("https://api.spotify.com/v1/browse/new-releases?country=MX",{headers})
    
  }

  getArtists(termino){
    const headers = new HttpHeaders({
      'Authorization': "Bearer BQDyQuFhFz_PMMi4n3ZsUlpvShe6UVeZvm4VJxJpJDeZprpJpwLshhkkPKf8YMly6ISRtrCfbvffPz_4Kcg"
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`,{headers})
    

  }
 
 
}
