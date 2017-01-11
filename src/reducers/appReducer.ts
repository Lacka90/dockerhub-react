import { concat, find, remove, cloneDeep } from 'lodash';

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
      const found = find(state, (fav) => fav.namespace === action.favourite.namespace && fav.name === action.favourite.name);
      if (found) {
        remove(state, (fav) => fav.namespace === action.favourite.namespace && fav.name === action.favourite.name);
        state = cloneDeep(state);
      } else {
        state = concat(state, [action.favourite]);
      }
      localStorage.setItem('FAVOURITE_LIST', JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

export function user(state = {}, action) {
  switch (action.type) {
    case 'AUTHENTICATE':
      state = action.user;
      return state;
    default:
      return state;
  }
}
