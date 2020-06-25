import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { GalaxyService } from '@galaxy/commons/services/galaxy/galaxy.service';
import { Artist } from '@galaxy/commons/models/spotify.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SearchArtistPresenter {
  formSearch: FormGroup;
  artists: Artist[] = [];
  
  constructor(
    private fb: FormBuilder,
    private spotify: GalaxyService,
    private router: Router,
  ) {
    this.formSearch = this.fb.group({
      q: ['', Validators.required]
    });
  }

  search() {
    if (this.formSearch.valid) {
      this.spotify.searchArtists(this.formSearch.value.q)
        .subscribe(
          res => this.artists = res.artists.items,
          err => console.log(err)
        );
    }
  }

  goArtist(id: string) {
    this.router.navigate(['/spotify/artist-detail', id]);
  }

}
