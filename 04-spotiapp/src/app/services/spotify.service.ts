import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Sercvice listo");
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: "Bearer BQBszwjPE53V_O7w7c9LP8ifA-bdal1Lx3WsNenjBowlxmOtf37sztp2HWhXIQb5HDeBxTog8P6pTbz3FXU"
    })
      return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
  }
}
