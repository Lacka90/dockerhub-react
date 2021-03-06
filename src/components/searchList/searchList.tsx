import * as React from 'react';
import * as fetch from 'isomorphic-fetch';
import * as isEqual from 'lodash/isEqual';

import { Repo } from '../repo/repo';
import { store } from '../../store';
import { updateFetchList } from '../../reducers/actions'

const REPOS_URL = 'https://hub.docker.com/v2/search/repositories/?query='

export class SearchList extends React.Component<any, undefined> {
  componentDidMount() {
    const searchParam = this.props.params.name;
    fetch(`${REPOS_URL}${searchParam}`).then(res => {
      return res.json();
    }).then(repos => {
      store.dispatch(updateFetchList(repos.results, searchParam));
    });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const searchParam = this.props.params.name;
    if (searchParam !== prevProps.params.name) {
      fetch(`${REPOS_URL}${searchParam}`).then(res => {
        return res.json();
      }).then(repos => {
        store.dispatch(updateFetchList(repos.results, searchParam));
      });
    }
  }

  componentWillUnmount() {
    store.dispatch(updateFetchList([], ''));
  }

  render() {
    return (
      <div className="list-group">
        {this.props.repos.map(repo =>
          <Repo
            key={repo.repo_name}
            {...repo}
          />
        )}
      </div>
    );
  }
}
