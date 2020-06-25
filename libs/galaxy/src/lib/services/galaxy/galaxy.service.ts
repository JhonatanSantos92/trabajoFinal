import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Album, NewReleaseResponse, Artist, Track, TopTracksResponse, SearchArtistsResponse } from '../../models/spotify.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class GalaxyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<Album[]> {
    return this.http.get<NewReleaseResponse>('browse/new-releases?limit=20')
    .pipe(
      map(res => res.albums.items)
    );
  }

  getArtist(id: string): Observable<Artist> {
    return this.http.get<Artist>(`artists/${id}`);
  }

  getArtistTracks(id: string): Observable<Track[]> {
    return this.http.get<TopTracksResponse>(`artists/${id}/top-tracks?country=us`)
    .pipe(
      map( res => res.tracks)
    );
  }

  searchArtists( q: string ): Observable<SearchArtistsResponse> {
    return this.http.get<SearchArtistsResponse>(`search?q=${q}&type=artist&limit=15`);
  }

}
