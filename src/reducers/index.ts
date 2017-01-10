import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { repos } from './appReducer';

export const rootReducer = combineReducers({
  repos,
  routing: routerReducer,
});
