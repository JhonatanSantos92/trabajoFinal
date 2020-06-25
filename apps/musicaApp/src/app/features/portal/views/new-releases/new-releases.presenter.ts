import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { GalaxyService } from '@galaxy/commons/services/galaxy/galaxy.service';
import { Album } from '@galaxy/commons/models/spotify.model';

@Injectable()
export class NewReleasePresenter {
  albums: Album[] = [];
  
  constructor(
    private router: Router,
    private spotify: GalaxyService,
  ) {}

  getNewReleases(){
    this.spotify.getNewReleases()
    .subscribe(
      albums => this.albums = albums,
      err => console.log(err),
    );
  }
  

  goArtist(id: string) {
    this.router.navigate(['/spotify/artist-detail', id]);
  }

}
