import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { repos, details } from './appReducer';

export const rootReducer = combineReducers({
  repos,
  details,
  routing: routerReducer,
});
