import * as concat from 'lodash/concat';

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
    case 'ADD_FAVOURITE':
      state = concat(state, [action.favourite]);
      return state;
    default:
      return state;
  }
}
