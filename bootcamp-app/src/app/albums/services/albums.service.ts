import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAlbumResponse } from '../models';


@Injectable()
export class AlbumsService {

  private baseUrl = `${environment.apiUrl}/albums`;

  public constructor(protected httpClient : HttpClient) { }

  public getAlbums() : Observable<IAlbumResponse[]> {
    return this.httpClient.get<IAlbumResponse[]>(this.baseUrl);
  }

  public getAlbum(id:number) : Observable<IAlbumResponse> {
    return this.httpClient.get<IAlbumResponse>(`${this.baseUrl}/${id}`);
  }
}

