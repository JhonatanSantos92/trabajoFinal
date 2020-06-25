import { Injectable } from '@angular/core';
import { Artist, Track } from '@galaxy/commons/models/spotify.model';
import { GalaxyService } from '@galaxy/commons/services/galaxy/galaxy.service';

@Injectable()
export class ArtistDetailPresenter {

  artist: Artist;
  tracks: Track[] = [];
  
  constructor(
    private spotify: GalaxyService, 
  ) {}

  getArtist(id){
    this.spotify.getArtist(id).subscribe(
      artist => this.artist = artist,
      err => console.log(err)
    );
  }
 
  getArtistTracks(id){
    this.spotify.getArtistTracks(id).subscribe(
      tracks => this.tracks = tracks,
      err => console.log(err)
    );
  }
}
