import { createAction } from 'redux-actions';

import { PunkBeerInterface, MyBeerInterface } from '../types/Beer';
import * as beerService from '../services/beer';
import { Error, AxiosError } from '../types/Error';
import { Action, ActionWithError, ActionWithPayload } from '../types/Actions';

export const FETCH_ALL_BEER = 'FETCH_ALL_BEER';
export type FETCH_ALL_BEER = typeof FETCH_ALL_BEER;

export const FETCH_ALL_BEER_PENDING = 'FETCH_ALL_BEER_PENDING';
export type FETCH_ALL_BEER_PENDING = typeof FETCH_ALL_BEER_PENDING;

export const FETCH_ALL_BEER_REJECTED = 'FETCH_ALL_BEER_REJECTED';
export type FETCH_ALL_BEER_REJECTED = typeof FETCH_ALL_BEER_REJECTED;

export const FETCH_ALL_BEER_FULFILLED = 'FETCH_ALL_BEER_FULFILLED';
export type FETCH_ALL_BEER_FULFILLED = typeof FETCH_ALL_BEER_FULFILLED;

export const FETCH_MY_BEER = 'FETCH_MY_BEER';
export type FETCH_MY_BEER = typeof FETCH_MY_BEER;

export const FETCH_MY_BEER_PENDING = 'FETCH_MY_BEER_PENDING';
export type FETCH_MY_BEER_PENDING = typeof FETCH_MY_BEER_PENDING;

export const FETCH_MY_BEER_FULFILLED = 'FETCH_MY_BEER_FULFILLED';
export type FETCH_MY_BEER_FULFILLED = typeof FETCH_MY_BEER_FULFILLED;

export const FETCH_MY_BEER_REJECTED = 'FETCH_MY_BEER_REJECTED';
export type FETCH_MY_BEER_REJECTED = typeof FETCH_MY_BEER_REJECTED;

export const CREATE_MY_BEER = 'CREATE_MY_BEER';
export type CREATE_MY_BEER = typeof CREATE_MY_BEER;

export const CREATE_MY_BEER_PENDING = 'CREATE_MY_BEER_PENDING';
export type CREATE_MY_BEER_PENDING = typeof CREATE_MY_BEER_PENDING;

export const CREATE_MY_BEER_FULFILLED = 'CREATE_MY_BEER_FULFILLED';
export type CREATE_MY_BEER_FULFILLED = typeof CREATE_MY_BEER_FULFILLED;

export const CREATE_MY_BEER_REJECTED = 'CREATE_MY_BEER_REJECTED';
export type CREATE_MY_BEER_REJECTED = typeof CREATE_MY_BEER_REJECTED;

export type FetchAllBeerPending = Action<FETCH_ALL_BEER_PENDING>;
export type FetchAllBeerFulfilled = ActionWithPayload<FETCH_ALL_BEER_FULFILLED, PunkBeerInterface[]>;
export type FetchAllBeerRejected = ActionWithError<FETCH_ALL_BEER_REJECTED, AxiosError<Error>>;

export type FetchMyBeerPending = Action<FETCH_MY_BEER_PENDING>;
export type FetchMyBeerFulfilled = ActionWithPayload<FETCH_MY_BEER_FULFILLED, MyBeerInterface[]>;
export type FetchMyBeerRejected = ActionWithError<FETCH_MY_BEER_REJECTED, AxiosError<Error>>;

export type CreateMyBeerPending = Action<CREATE_MY_BEER_PENDING>;
export type CreateMyBeerFulfilled = ActionWithPayload<CREATE_MY_BEER_FULFILLED, MyBeerInterface>;
export type CreateMyBeerRejected = ActionWithError<CREATE_MY_BEER_REJECTED, AxiosError<Error>>;

export type FetchAllBeerActions = FetchAllBeerPending | FetchAllBeerFulfilled | FetchAllBeerRejected;
export type FetchMyBeerActions = FetchMyBeerPending | FetchMyBeerFulfilled | FetchMyBeerRejected;
export type CreateMyBeerActions = CreateMyBeerPending | CreateMyBeerFulfilled | CreateMyBeerRejected;

export const FetchAllBeer = createAction(FETCH_ALL_BEER, beerService.fetchAllBeer);
export const FetchMyBeer = createAction(FETCH_MY_BEER, beerService.fetchMyBeer);
export const CreateMyBeer = createAction(CREATE_MY_BEER, beerService.createMyBeer);
