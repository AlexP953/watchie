import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { audiovisualDetail } from '../interfaces/audiovisual';

@Injectable({
  providedIn: 'root',
})
export class ManageElementsService {
  constructor() {}

  favCine$ = new BehaviorSubject([{}]);
  favTv$ = new BehaviorSubject([{}]);
  favoritesTv: audiovisualDetail[] = [];
  favoritesMovie: audiovisualDetail[] = [];

  addToFavorites(newElement: audiovisualDetail, type: string) {
    if (type === 'tv') {
      if (
        !this.favoritesTv.find(
          (element: audiovisualDetail) => element.id === newElement.id
        )
      ) {
        this.favoritesTv.push(newElement);
      }
      this.favTv$.next(this.favoritesTv);

    } else if (type === 'movie') {
      if (
        !this.favoritesMovie.find((element) => element.id === newElement.id)
      ) {
        this.favoritesMovie.push(newElement);
      }
      this.favCine$.next(this.favoritesMovie);
    }
    newElement.isFavorite = true;

  }

  deleteToFavorites(newElement: audiovisualDetail, type: string) {
    if (type === 'tv') {
      let index = this.favoritesTv
        .map((oldElement) => oldElement.id)
        .indexOf(newElement.id);
      this.favoritesTv.splice(index, 1);
      this.favTv$.next(this.favoritesTv);
    } else if (type === 'movie') {
      let index = this.favoritesTv
        .map((oldElement) => oldElement.id)
        .indexOf(newElement.id);
      this.favoritesMovie.splice(index, 1);
      this.favCine$.next(this.favoritesMovie);
    }
    newElement.isFavorite = false;
  }
}
