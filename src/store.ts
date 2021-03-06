import thunkMiddleware from 'redux-thunk';
import * as createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import { rootReducer } from './reducers';

import { repos } from './data/repos';

const favouriteList = JSON.parse(localStorage.getItem('FAVOURITE_LIST'));

const initialState = {
  user: {},
  repos: [],
  details: {},
  favourites: favouriteList || [],
};

const loggerMiddleware = createLogger()

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
)

export const history = syncHistoryWithStore(hashHistory, store);
