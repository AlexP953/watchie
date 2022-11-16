import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { ManageElementsService } from 'src/app/services/manage-elements.service';
import { audiovisual, audiovisualDetail } from 'src/app/interfaces/audiovisual';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  faHeart = faHeart;
  audiovisual: audiovisual[] = [];
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
      this.audiovisual = data;
    });
  }

  addToFavorites(element: audiovisual) {
    this.ManageElementsService.addToFavorites(element, 'movie');
  }

  deleteToFavorites(element: audiovisual) {
    this.ManageElementsService.deleteToFavorites(element, 'movie');
  }

  navigateTo(idEscogida: number, type: string) {
    this.router.navigate(['detail', type, idEscogida]);
  }
}
