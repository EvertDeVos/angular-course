import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAlbum } from '../../models';

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

  @Input() public album!: IAlbum;
  @Output() public albumChange: EventEmitter<IAlbum>;

  public constructor() {
    this.albumChange = new EventEmitter<IAlbum>();
    this.currentTab = AlbumTabOption.Info;
  }

  public onSelectTab(tab: AlbumTabOption): void {
    this.currentTab = tab;
  }

  public onAlbumChanges(): void {
    this.albumChange.emit(this.album);
  }
}
