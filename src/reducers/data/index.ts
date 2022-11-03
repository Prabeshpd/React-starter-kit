import { combineReducers } from 'redux';

import user from './user';
import punkBeer from './punkBeer';
import myBeer from './myBeer';

const dataReducers = combineReducers({ user, punkBeer, myBeer });

export default dataReducers;
