export interface PunkBeerInterface {
  id: number;
  name: string;
  description: string;
  tagline: string;
  imageUrl: string;
  ingredients: {}[];
}

export interface BeerParams {
  page: number;
  perPage: Number;
}

export interface MyBeerInterface {
  id: number;
  name: string;
  description: string;
  genre: string;
}

export interface MyBeerPayload {
  name: string;
  description: string;
  genre: string;
}
