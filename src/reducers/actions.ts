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

export function updateRepoDetail(repo) {
  return {
    type: 'UPDATE_REPO_DETAIL',
    repo,
  }
}

export function addFavourite(favourite) {
  return {
    type: 'ADD_FAVOURITE',
    favourite,
  }
}
