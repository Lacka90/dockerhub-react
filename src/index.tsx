import * as React from 'react';
import { render } from 'react-dom';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import { Welcome } from './components/welcome/welcome';
import { SearchList } from './components/searchList/searchList';

import { NotFound } from './components/notFound/notFound';

import { store, history } from './store';

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path="/search/:name" component={SearchList}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
  </Provider>
);

render(router, document.getElementById('app'));
