import { Favourites } from './../components/favourites/favourites';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { repos, details, favourites, user } from './appReducer';

export const rootReducer = combineReducers({
  user,
  repos,
  details,
  favourites,
  routing: routerReducer,
});
