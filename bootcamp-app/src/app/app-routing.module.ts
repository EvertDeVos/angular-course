import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent, OverviewComponent } from './albums/pages';

const routes: Routes = [
  { path: 'albums/:id', component: DetailComponent },
  { path: 'albums', component: OverviewComponent },
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: '**', redirectTo: 'albums' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
