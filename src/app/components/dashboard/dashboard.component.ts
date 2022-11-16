import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { ManageElementsService } from 'src/app/services/manage-elements.service';
import { audiovisual, audiovisualDetail } from 'src/app/interfaces/audiovisual';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faHeart = faHeart;
  movies: audiovisual[] = [];
  tvSeries: audiovisual[] = [];
  tvFavs: audiovisualDetail[] = [];
  movieFavs: audiovisualDetail[] = [];

  constructor(
    public apiCall: APICallService,
    public ManageElementsService: ManageElementsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ManageElementsService.favCine$.subscribe((data) => {
      this.movieFavs = data;
    });
    this.apiCall.getPopular('movie').subscribe((data: any) => {
      this.movies = data;
      this.movies.sort(
        (a: audiovisual, b: audiovisual) => b.vote_average - a.vote_average
      );
    });
        this.ManageElementsService.favCine$.subscribe((data) => {
          this.tvFavs = data;
        });
        this.apiCall.getPopular('tv').subscribe((data: any) => {
          this.tvSeries = data;
                this.tvSeries.sort(
                  (a: audiovisual, b: audiovisual) =>
                    b.vote_average - a.vote_average
                );
        });
  }

  addToFavorites(element: audiovisual, type: string) {
    this.ManageElementsService.addToFavorites(element, type);
  }

  deleteToFavorites(element: audiovisual, type: string) {
    this.ManageElementsService.deleteToFavorites(element, type);
  }

  navigateTo(idEscogida: number, type: string) {
    this.router.navigate(['detail', type, idEscogida]);
  }
}
