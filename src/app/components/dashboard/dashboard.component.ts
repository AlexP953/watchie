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
  audiovisuales: audiovisual[] = [];
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
    this.ManageElementsService.favCine$.subscribe((data) => {
      this.tvFavs = data;
    });

    this.apiCall.getPopular('movie').subscribe((data: any) => {
      data.map((x: audiovisual) => {
        x.type = 'movie';
        this.audiovisuales.push(x);
      });
    });
    this.apiCall.getPopular('tv').subscribe((data: any) => {
      data.map((x: audiovisual) => {
        this.audiovisuales.push(x);
        x.type = 'tv';
      });
          this.audiovisuales.sort(function () {
            return Math.random() - 0.5;
          });
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
