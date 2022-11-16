import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { audiovisual, audiovisualDetail } from '../interfaces/audiovisual';

const LINK = 'https://api.themoviedb.org/3/';
const APIKEY = 'c6aeee577586ba38e487b74dfede5deb';
const LANG = 'es-ES';
@Injectable({
  providedIn: 'root',
})
export class APICallService {
  type: string = 'tv';
  constructor(private http: HttpClient) {}

  getPopular(type: string) {
    // Realiza la llamada API para recibir un listado con las series/peliculas más populares. Si type es 'tv' hará la busqueda de series. Si es 'movie' buscará peliculas.

    if (type === 'tv') {
      return this.http
        .get(`${LINK}${type}/popular?api_key=${APIKEY}&language=${LANG}`)
        .pipe(map(this.transformPopularData));
    } else {
      // type === 'movie'
      return this.http
        .get(`${LINK}${type}/popular?api_key=${APIKEY}&language=${LANG}`)
        .pipe(map(this.transformPopularData));
    }
  }

  getDetail(id: number, type: string) {
    // Recibe el detalle de lo que has pedido. 'type' es si es 'tv o 'movie' e 'id' es el ID del elemento. Luego pasa por un pipe para limpiar la información y quitar los datos inservibles.
    
    if (type === 'tv') {
      return this.http
        .get(`${LINK}${type}/${id}?api_key=${APIKEY}&language=${LANG}`)
        .pipe(map(this.transformDetailTv));
    } else {
      // type === 'movie'
      return this.http
        .get(`${LINK}${type}/${id}?api_key=${APIKEY}&language=${LANG}`)
        .pipe(map(this.transformDetailMovie));
    }
  }

  private transformPopularData(resp: any) {
    const popularList: audiovisual = resp.results.map((data: audiovisual) => {
      return {
        id: data.id,
        name: data.name || data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
      };
    });
    return popularList;
  }
  private transformDetailTv(resp: any) {
    let detailData: audiovisualDetail = {};
    detailData.genres = resp.genres;
    detailData.id = resp.id;
    detailData.name = resp.name;
    detailData.number_of_episodes = resp.number_of_episodes;
    detailData.number_of_seasons = resp.number_of_seasons;
    detailData.overview = resp.overview;
    detailData.poster_path = resp.poster_path;
    detailData.vote_average = resp.vote_average;
    return detailData;
  }
  private transformDetailMovie(resp: any) {
    let detailData: audiovisualDetail = {};
    detailData.genres = resp.genres;
    detailData.id = resp.id;
    detailData.name = resp.title;
    detailData.release_date = resp.release_date;
    detailData.overview = resp.overview;
    detailData.poster_path = resp.poster_path;
    detailData.vote_average = resp.vote_average;
    return detailData;
  }
}
