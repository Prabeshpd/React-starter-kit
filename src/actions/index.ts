import { LogoutActions } from './logout';
import { LoginActions, RefreshTokenActions } from './login';
import { FetchAllBeerActions, FetchMyBeerActions, CreateMyBeerActions } from './beer';

export type BeerActions = FetchAllBeerActions | FetchMyBeerActions | CreateMyBeerActions;
export type AuthActions = LoginActions | RefreshTokenActions | LogoutActions;
