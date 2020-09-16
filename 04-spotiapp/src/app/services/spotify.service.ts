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
  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: "Bearer BQDQN-RMvv5deN6-lzsUMJB2V4Zjb5HByu-8Mw8hQJrehW1q7pYGw8fgyQ-92lW90XBUA_SWPAX7SKxVRsI"
    })
    return this.http.get(url, {headers});
  }

  getNewReleases(){
      return this.getQuery("browse/new-releases&limit=20").pipe(map( data => data["albums"].items));
  }

  getArtista( termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data["artists"].items));
  }
}
