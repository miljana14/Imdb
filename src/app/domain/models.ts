export interface Film{
  id: number;
  title: string;
  description: string;
  actors: Actor[];
  averageMark: number;
  marks?: number[];
  images: string[];
  comments?: FilmComment[];
  isFavourite:boolean;
}

export interface Actor{
  id?: number;
  name: string;
  role: string;
}

export interface FilmComment{
  id: number;
  username: string;
  mark: number;
  comment: string;
}

