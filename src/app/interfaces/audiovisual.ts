export interface audiovisual {
  name?: string;
  title?: string;
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  isFavorite?: boolean;
  type:string
}

export interface audiovisualDetail {
  genres?: [];
  id?: number;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  release_date? : string;
  overview?: string;
  poster_path?: string;
  vote_average?: number;
  isFavorite?:boolean
}
