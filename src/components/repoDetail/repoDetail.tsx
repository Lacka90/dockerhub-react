import * as React from 'react';
import * as fetch from 'isomorphic-fetch';
import * as isEqual from 'lodash/isEqual';
import { Link } from 'react-router';

import { store } from '../../store';
import { updateRepoDetail, toggleFavourite } from '../../reducers/actions'

const REPO_URL = 'https://hub.docker.com/v2/repositories/';

export class RepoDetail extends React.Component<any, undefined> {
  componentDidMount() {
    const repoNames = this.nameCreator(this.props.params);

    fetch(`${REPO_URL}${repoNames}`).then(res => {
      return res.json();
    }).then(repo => {
      store.dispatch(updateRepoDetail(repo));
    });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const repoNames = this.nameCreator(this.props.params);
    const prevNames = this.nameCreator(prevProps.params);

    if (repoNames !== prevNames) {
      fetch(`${REPO_URL}${repoNames}`).then(res => {
        return res.json();
      }).then(repo => {
        store.dispatch(updateRepoDetail(repo));
      });
    }
  }

  componentWillUnmount() {
    store.dispatch(updateRepoDetail({}));
  }

  nameCreator(params) {
    const repoNames = [params.repo];
    if (params.subrepo) {
      repoNames.push(params.subrepo);
    } else {
      repoNames.unshift('library');
    }
    return repoNames.join('/');
  }

  toggleFav(details) {
    store.dispatch(toggleFavourite(details));
  }

  render() {
    return (
      <div>
        <h1>{ this.props.details.name }</h1> <span className="glyphicon glyphicon-star" onClick={this.toggleFav.bind(this, this.props.details)}></span>
        <div>Namespace: { this.props.details.namespace }</div>
        <div>User: { this.props.details.user }</div>
        <div>Last updated: { this.props.details.last_updated }</div>
        <div>Star count: { this.props.details.star_count }</div>
      </div>
    );
  }
}
