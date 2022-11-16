import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'series',
    component: TvSeriesComponent,
  },
  {
    path: 'peliculas',
    component: MoviesComponent,
  },
  {
    path: 'DetailComponent/:id',
    component: DetailComponent,
  },
  {
    //Si se equivoca, etc
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
