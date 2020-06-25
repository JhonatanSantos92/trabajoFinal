import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetailPresenter } from './artist-detail.presenter';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.view.html',
  styleUrls: ['./artist-detail.view.scss'],
  providers: [ ArtistDetailPresenter ]
})
export class ArtistDetailView implements OnInit {
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public presenter: ArtistDetailPresenter
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.presenter.getArtist(id);
    this.presenter.getArtistTracks(id);
  }

}
