export function addRepo(repo) {
  return {
    type: 'ADD_REPO',
    repo,
  }
}

export function updateFetchList(repos, query) {
  return {
    type: 'UPDATE_SEARCH',
    query: query,
    repos,
  }
}
