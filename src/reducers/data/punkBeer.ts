import { BeerActions } from '../../actions';
import BeerState from '../../types/state/data/PunkBeerState';
import { FETCH_ALL_BEER_FULFILLED, FETCH_ALL_BEER_REJECTED } from '../../actions/beer';

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
    case FETCH_ALL_BEER_FULFILLED: {
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

    case FETCH_ALL_BEER_REJECTED:
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
