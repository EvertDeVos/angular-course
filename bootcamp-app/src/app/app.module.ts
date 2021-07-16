import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './albums/components';
import { AlbumsService } from './albums/services/albums.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './albums/pages/overview/overview.component';
import { DetailComponent } from './albums/pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    OverviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
