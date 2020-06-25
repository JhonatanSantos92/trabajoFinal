export interface Image {
  url: string;
}

export interface Artist {
  external_urls: {
      spotify: string;
  };
  id: string;
  name: string;
  images: Image[];
}

export interface Album  {
  artists: Artist[];
  images: Image[];
  name: string;
}

export interface NewReleaseResponse {
  albums: {
      items: Album[]
  };
}

export interface Track {
  album: Album;
  name: string;
  preview_url: string;
  uri: string;
}

export interface TopTracksResponse {
  tracks: Track[];
}

export interface SearchArtistsResponse {
  artists: {
    items: Artist[]
  };
}

export interface SearchArtistsResponse {
  artists: {
    items: Artist[]
  };
}
