import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, TvSeriesComponent, MoviesComponent, DetailComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
