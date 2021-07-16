import { Component, OnInit } from '@angular/core';
import { Album, IAlbum } from './albums/models';
import { AlbumsService } from './albums/services/albums.service';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public albums?: IAlbum[];

  public constructor(private albumsService: AlbumsService) {}

  public async ngOnInit(): Promise<void> {
    this.albums = await this.getAlbums();
  }

  private getAlbums(): Promise<IAlbum[]> {
    return this.albumsService
      .getAlbums()
      .pipe(
        map((result) => result.map(Album.fromResponse)),
        first()
      )
      .toPromise();
  }
}
