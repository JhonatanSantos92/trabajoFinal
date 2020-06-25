import { Component } from '@angular/core';
import { SearchArtistPresenter } from './search-artist.presenter';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.view.html',
  styleUrls: ['./search-artist.view.scss'],
  providers: [ SearchArtistPresenter ]
})
export class SearchArtistView {
  
  constructor(
    public presenter: SearchArtistPresenter) {
  }

  search(){
    this.presenter.search();
  }
  
  goArtist(id: string){
    this.presenter.goArtist(id);
  }

}
