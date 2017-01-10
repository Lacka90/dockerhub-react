export function repos(state = [], action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      state = action.repos;
      return state;
    default:
      return state;
  }
}
