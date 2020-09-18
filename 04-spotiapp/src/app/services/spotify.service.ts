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
      Authorization: "Bearer BQDZmNr3G9fJeQLLqMbW6Q7yQeyIQDXiqa9FcA8iX21M7OJ8f8ScXSQCpVcJeyB2-evSBUdT_JknIAZohn0"
    })
    return this.http.get(url, {headers});
  }

  getNewReleases(){
      return this.getQuery("browse/new-releases?limit=15").pipe(map( data => data["albums"].items));
  }

  getArtistas( termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data["artists"].items));
  }
  
  getArtista( id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( data => data["tracks"]));
  }
}
