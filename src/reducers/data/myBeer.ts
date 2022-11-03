import { BeerActions } from '../../actions';
import BeerState from '../../types/state/data/MyBeerState';
import {
  FETCH_MY_BEER_FULFILLED,
  FETCH_MY_BEER_REJECTED,
  CREATE_MY_BEER_FULFILLED,
  CREATE_MY_BEER_REJECTED,
} from '../../actions/beer';

export const INITIAL_STATE: BeerState = {
  beers: [],
  error: {
    code: '',
    message: '',
  },
};

/**
 * Reducer for login.
 *
 * @param {UserState} [state = INITIAL_STATE]
 * @param {AuthActions} action
 * @returns {AppState}
 */
export default function (state: BeerState = INITIAL_STATE, action: BeerActions): BeerState {
  switch (action.type) {
    case FETCH_MY_BEER_FULFILLED: {
      const stateBeers = state.beers;
      const payloadBeers = action.payload;
      const deduplicatedBeers = stateBeers.concat(
        payloadBeers.filter((pBeer) => stateBeers.every((sBeer) => sBeer.id != pBeer.id))
      );

      return {
        ...state,
        beers: deduplicatedBeers,
      };
    }

    case CREATE_MY_BEER_FULFILLED: {
      return {
        ...state,
        beers: [...state.beers, ...[action.payload]],
      };
    }

    case FETCH_MY_BEER_REJECTED:
    case CREATE_MY_BEER_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload?.response?.data.code,
          message: action.payload?.response?.data.message,
        },
      };

    default:
      return state;
  }
}
