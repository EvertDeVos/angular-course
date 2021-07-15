export interface IAlbumResponse {
  title: string;
  artist: string;
  releaseDate: string;
  coverArt: string;
  tracks: { order: number; title: string }[];
}
