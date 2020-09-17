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
      Authorization: "Bearer BQAUjCrmjYm3x4o5KsjpiCqX-LSZpuGrK0Nh7_6u-2xnH80E0FT5iiBpja6y1jfpWt7Q0agmCZTM0vVHEZE"
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
