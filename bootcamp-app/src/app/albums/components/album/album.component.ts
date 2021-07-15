import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Album {
  title: string;
  artist: string;
  releaseDate: Date;
  coverArt: string;
  tracks: { order: number; title: string }[];
}

enum AlbumTabOption {
  None,
  Info,
  Tracks,
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  public TabOption = AlbumTabOption;

  public currentTab: AlbumTabOption;

  @Input() public album! : Album;
  @Output() public albumChange :EventEmitter<Album>;

  public constructor() {
    this.albumChange = new EventEmitter<Album>();
    this.currentTab = AlbumTabOption.Info;
  }

  public onSelectTab(tab: AlbumTabOption): void {
    this.currentTab = tab;
  }

  public onAlbumChanges() : void {
    this.albumChange.emit(this.album);
  }
}
