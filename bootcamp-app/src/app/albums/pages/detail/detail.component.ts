import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { Album, IAlbum } from '../../models';
import { AlbumsService } from '../../services/albums.service';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public album!: IAlbum;

  public constructor(
    protected albumsService: AlbumsService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {}

  public async ngOnInit(): Promise<void> {
    const { id } = this.activatedRoute.snapshot.params;

    if (!id) {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }

    this.album = await this.loadAlbum(id);

    if (!this.album) {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }
  }

  // data loaders
  private loadAlbum(id: number): Promise<IAlbum> {
    return this.albumsService
      .getAlbum(id)
      .pipe(map(Album.fromResponse), first(), catchError(err => EMPTY))
      .toPromise();
  }
}
