import { Favourites } from './../components/favourites/favourites';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { repos, details, favourites } from './appReducer';

export const rootReducer = combineReducers({
  repos,
  details,
  favourites,
  routing: routerReducer,
});
