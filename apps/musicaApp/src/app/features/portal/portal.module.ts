import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { PortalCommonsModule } from './commons/commons.module';
import { ArtistDetailView } from './views/artist-detail/artist-detail.view';
import { NewReleasesView } from './views/new-releases/new-releases.view';
import { SearchArtistView } from './views/search-artist/search-artist.view';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PortalComponent,
    ArtistDetailView,
    NewReleasesView,
    SearchArtistView,

  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PortalModule { }
