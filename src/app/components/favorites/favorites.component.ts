import { Component, OnInit } from '@angular/core';
import { ManageElementsService } from 'src/app/services/manage-elements.service';
import { audiovisualDetail } from 'src/app/interfaces/audiovisual';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  tvFavs: audiovisualDetail[] = [];
  movieFavs: audiovisualDetail[] = [{}];

  constructor(
    public ManageElementsService: ManageElementsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ManageElementsService.favCine$.subscribe((data) => {
      this.movieFavs = data;
    });

    this.ManageElementsService.favTv$.subscribe((data) => {
      this.tvFavs = data;
    });
  }

  navigateTo(idEscogida:number | undefined , type: string) {
    this.router.navigate(['detail', type, idEscogida]);
  }
}
