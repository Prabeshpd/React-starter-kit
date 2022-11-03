import { BeerActions } from '../../actions';
import BeerState from '../../types/state/ui/PunkBeerState';
import { FETCH_ALL_BEER_PENDING, FETCH_ALL_BEER_FULFILLED, FETCH_ALL_BEER_REJECTED } from '../../actions/beer';

export const INITIAL_STATE: BeerState = {
  error: {},
  errorCode: '',
  isLoadingPunkBeer: false,
  isFetchPunkBeerFailed: false,
};

/**
 * Reducer for login UI.
 *
 * @param {LoginState} [state = INITIAL_STATE]
 * @param {AppActions} action
 * @returns {AppState}
 */
export default function login(state: BeerState = INITIAL_STATE, action: BeerActions): BeerState {
  switch (action.type) {
    case FETCH_ALL_BEER_PENDING:
      return {
        ...state,
        isLoadingPunkBeer: true,
      };

    case FETCH_ALL_BEER_FULFILLED:
      return {
        ...state,
        isLoadingPunkBeer: false,
      };

    case FETCH_ALL_BEER_REJECTED:
      return {
        ...state,
        isLoadingPunkBeer: false,
        isFetchPunkBeerFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    default:
      return state;
  }
}
