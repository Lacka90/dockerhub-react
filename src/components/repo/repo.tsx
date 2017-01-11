import * as React from 'react';
import { Link, hashHistory } from 'react-router';

export class Repo extends React.Component<any, undefined> {
  go(url) {
    hashHistory.push(url);
  }

  render() {
    const url = `/details/${this.props.repo_name}`;
    return (
      <button type="button" className="list-group-item" onClick={this.go.bind(this, url)}>{this.props.repo_name}</button>
    );
  }
}
