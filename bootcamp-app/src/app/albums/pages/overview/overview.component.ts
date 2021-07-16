import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { Album, IAlbum } from '../../models';
import { AlbumsService } from '../../services/albums.service';

@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public albums: IAlbum[];

  constructor(protected albumsService: AlbumsService) {
    this.albums = [];
  }

  public async ngOnInit(): Promise<void> {
    this.albums = await this.loadAlbums();
  }

  // data loaders
  protected loadAlbums(): Promise<IAlbum[]> {
    return this.albumsService
      .getAlbums()
      .pipe(
        map((result) => result.map(Album.fromResponse)),
        first()
      )
      .toPromise();
  }
}
