import { IAlbumResponse } from './album-response';

export interface IAlbum {
  title: string;
  artist: string;
  releaseDate: Date;
  coverArt: string;
  tracks: { order: number; title: string }[];
}

function fromResponse(response: IAlbumResponse): IAlbum {
  const { title, artist, releaseDate, coverArt, tracks } = response;

  return {
    title,
    artist,
    coverArt,
    tracks,
    releaseDate: new Date(releaseDate),
  };
}

export const Album = {
  fromResponse,
};
