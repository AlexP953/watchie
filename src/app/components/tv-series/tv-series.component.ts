import { Component, OnInit } from '@angular/core';
import { APICallService } from '../../services/api-call.service';
import { ManageElementsService } from 'src/app/services/manage-elements.service';
import { audiovisual, audiovisualDetail } from 'src/app/interfaces/audiovisual';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss'],
})
export class TvSeriesComponent implements OnInit {
  faHeart = faHeart;
  audiovisual: audiovisual[] = [];
  tvFavs: audiovisualDetail[] = [];

  constructor(
    public apiCall: APICallService,
    public ManageElementsService: ManageElementsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ManageElementsService.favCine$.subscribe((data) => {
      this.tvFavs = data;
    });
    this.apiCall.getPopular('tv').subscribe((data: any) => {
      this.audiovisual = data;
    });
  }

  addToFavorites(element: audiovisual) {
    this.ManageElementsService.addToFavorites(element, 'tv');
  }

  deleteToFavorites(element: audiovisual) {
    this.ManageElementsService.deleteToFavorites(element, 'tv');
  }

  navigateTo(idEscogida: number, type: string) {
    this.router.navigate(['detail', type, idEscogida]);
  }
}
