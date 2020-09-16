import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Sercvice listo");
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: "Bearer BQDQN-RMvv5deN6-lzsUMJB2V4Zjb5HByu-8Mw8hQJrehW1q7pYGw8fgyQ-92lW90XBUA_SWPAX7SKxVRsI"
    });
      return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}).pipe(map( data => data["albums"].items))
  }

  getArtista( termino: string){
    const headers = new HttpHeaders({
      Authorization: "Bearer BQDQN-RMvv5deN6-lzsUMJB2V4Zjb5HByu-8Mw8hQJrehW1q7pYGw8fgyQ-92lW90XBUA_SWPAX7SKxVRsI"
    })
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map( data => data["artists"].items))
  }
}
