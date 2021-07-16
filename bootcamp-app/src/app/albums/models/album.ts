import { IAlbumResponse } from './album-response';

export interface IAlbum {
  id:number,
  title: string;
  artist: string;
  releaseDate: Date;
  coverArt: string;
  tracks: { order: number; title: string }[];
}

function fromResponse(response: IAlbumResponse): IAlbum {
  const { id, title, artist, releaseDate, coverArt, tracks } = response;

  return {
    id,
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
