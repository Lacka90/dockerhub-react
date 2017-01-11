import * as React from 'react';
import * as fetch from 'isomorphic-fetch';
import * as isEqual from 'lodash/isEqual';
import { Link } from 'react-router';

import { store } from '../../store';
import { updateRepoDetail } from '../../reducers/actions'

const REPO_URL = 'https://hub.docker.com/v2/repositories/library/';

export class RepoDetail extends React.Component<any, undefined> {
  componentDidMount() {
    const repoName = this.props.params.repo;
    fetch(`${REPO_URL}${repoName}`).then(res => {
      return res.json();
    }).then(repo => {
      store.dispatch(updateRepoDetail(repo));
    });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const repoName = this.props.params.repo;
    if (repoName !== prevProps.params.repo) {
      fetch(`${REPO_URL}${repoName}`).then(res => {
        return res.json();
      }).then(repo => {
        store.dispatch(updateRepoDetail(repo));
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.props.details.name }</h1>
        <div>Namespace: { this.props.details.namespace }</div>
        <div>User: { this.props.details.user }</div>
        <div>Last updated: { this.props.details.last_updated }</div>
        <div>Star count: { this.props.details.star_count }</div>
      </div>
    );
  }
}
