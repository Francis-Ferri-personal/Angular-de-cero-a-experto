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
      Authorization: "Bearer BQB7iyXyC7gY_tOm1tPRmM39hNpC63ZZ9J3xxowpITERovQTrEPGnaDR8hgvZGDTE3AHlzepWARbJJ2lEt4"
    })
      this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers}) 
      .subscribe(
        data => {
          console.log(data);
          
        }
      );
  }
}
