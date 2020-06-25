import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { NewReleasesView } from './views/new-releases/new-releases.view';
import { ArtistDetailView } from './views/artist-detail/artist-detail.view';
import { SearchArtistView } from './views/search-artist/search-artist.view';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', component: NewReleasesView },
      { path: 'artist-detail/:id', component: ArtistDetailView },
      { path: 'search', component: SearchArtistView },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
