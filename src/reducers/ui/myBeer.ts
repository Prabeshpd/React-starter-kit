import { BeerActions } from '../../actions';
import BeerState from '../../types/state/ui/MyBeerState';
import {
  FETCH_MY_BEER_PENDING,
  FETCH_MY_BEER_FULFILLED,
  FETCH_MY_BEER_REJECTED,
  CREATE_MY_BEER_PENDING,
  CREATE_MY_BEER_FULFILLED,
  CREATE_MY_BEER_REJECTED,
} from '../../actions/beer';

export const INITIAL_STATE: BeerState = {
  error: {},
  errorCode: '',
  isLoadingMyBeer: false,
  isFetchMyBeerFailed: false,
  isCreateMyBeerFailed: false,
  isLoadingCreateMyBeer: false,
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
    case FETCH_MY_BEER_PENDING:
      return {
        ...state,
        isLoadingMyBeer: true,
      };

    case FETCH_MY_BEER_FULFILLED:
      return {
        ...state,
        isLoadingMyBeer: false,
      };

    case FETCH_MY_BEER_REJECTED:
      return {
        ...state,
        isLoadingMyBeer: false,
        isFetchMyBeerFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    case CREATE_MY_BEER_PENDING:
      return {
        ...state,
        isLoadingCreateMyBeer: true,
      };

    case CREATE_MY_BEER_FULFILLED:
      return {
        ...state,
        isLoadingCreateMyBeer: false,
      };

    case CREATE_MY_BEER_REJECTED:
      return {
        ...state,
        isLoadingCreateMyBeer: false,
        isCreateMyBeerFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    default:
      return state;
  }
}
