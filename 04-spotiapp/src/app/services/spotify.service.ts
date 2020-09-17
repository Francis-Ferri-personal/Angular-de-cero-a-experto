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
      Authorization: "Bearer BQAgb1mUfm7yVvvsNHqnqknrtqJOKJaM2D_LJPiQHJqL0oBw92v66IcEBTDIoVhIJCHa7bFqVjgsqsP8Bbg"
    })
    return this.http.get(url, {headers});
  }

  getNewReleases(){
      return this.getQuery("browse/new-releases?limit=15").pipe(map( data => data["albums"].items));
  }

  getArtista( termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map( data => data["artists"].items));
  }
}
