import config from '../config';
import http, { punkHttp } from '../utils/http';
import { BeerParams, MyBeerPayload } from 'types/Beer';
import * as qs from '../utils/queryString';
import { toSnakeCase, toCamelCase } from '../utils/object';

export async function fetchAllBeer(params: BeerParams) {
  const queryString = (params && qs.stringify(toSnakeCase(params))) || '';

  const url = config.endpoints.fetchAllBeers + queryString;
  const { data } = await punkHttp.get(url);

  return toCamelCase(data);
}

export async function fetchMyBeer() {
  const url = config.endpoints.fetchMyBeers;
  const { data } = await http.get(url);

  return data;
}

export async function createMyBeer(payload: MyBeerPayload) {
  const url = config.endpoints.createMyBeer;
  const { data } = await http.post(url, toSnakeCase(payload));

  return data;
}
