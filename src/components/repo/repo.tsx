import * as React from 'react';
import { Link } from 'react-router';

export class Repo extends React.Component<any, undefined> {
  render() {
    const url = `/details/${this.props.repo_name}`;
    return (
      <li>
        <Link to={ url }>{this.props.repo_name}</Link>
      </li>
    );
  }
}
