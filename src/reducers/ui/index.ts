import { combineReducers } from 'redux';

import login from './Login';
import punkBeer from './punkBeer';
import myBeer from './myBeer';

const uiReducers = combineReducers({ login, punkBeer, myBeer });

export default uiReducers;
