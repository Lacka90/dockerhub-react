import * as React from 'react';
import { Link, hashHistory } from 'react-router';

export class Repo extends React.Component<any, undefined> {
  go(url) {
    hashHistory.push(url);
  }

  render() {
    const url = `/details/${this.props.repo_name}`;
    return (
      <Link to={ url } className="list-group-item">
        <h4 className="list-group-item-heading">{this.props.repo_name}</h4>
        <p className="list-group-item-text">{this.props.short_description}</p>
      </Link>
    );
  }
}
