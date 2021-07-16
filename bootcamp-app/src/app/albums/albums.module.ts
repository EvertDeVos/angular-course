import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components';
import { DetailComponent, OverviewComponent } from './pages';
import { AlbumsService } from './services/albums.service';

const albumRoutes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: ':id', component: DetailComponent },
];

@NgModule({
  declarations: [DetailComponent, OverviewComponent, AlbumComponent],
  providers: [AlbumsService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(albumRoutes),
  ],
})
export class AlbumsModule {}
