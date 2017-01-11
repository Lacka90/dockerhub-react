import * as concat from 'lodash/concat';
import * as includes from 'lodash/includes';
import * as without from 'lodash/without';

export function repos(state = [], action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      state = action.repos;
      return state;
    default:
      return state;
  }
}

export function details(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_REPO_DETAIL':
      state = action.repo;
      return state;
    default:
      return state;
  }
}

export function favourites(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (includes(state, action.favourite)) {
        state = without(state, action.favourite);
      } else {
        state = concat(state, [action.favourite]);
      }
      return state;
    default:
      return state;
  }
}
