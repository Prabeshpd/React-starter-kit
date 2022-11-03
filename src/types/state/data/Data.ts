import UserState from './UserState';
import MyBeerState from './MyBeerState';
import PunkBeerState from './PunkBeerState';

interface DataState {
  readonly user: UserState;
  readonly punkBeer: PunkBeerState;
  readonly myBeer: MyBeerState;
}

export default DataState;
