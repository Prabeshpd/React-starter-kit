import AppState from './AppState';
import LoginState from './LoginState';
import MyBeerState from './MyBeerState';
import PunkBeerState from './PunkBeerState';

interface UI {
  readonly app: AppState;
  readonly punkBeer: PunkBeerState;
  readonly myBeer: MyBeerState;
  readonly login: LoginState;
}

export default UI;
