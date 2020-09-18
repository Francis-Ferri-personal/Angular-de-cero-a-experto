import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean = true;
  

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) { 
    this.router.params.subscribe( params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string){
    this.spotify.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loadingArtist = false;
    })
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
      
    })
  }
}
