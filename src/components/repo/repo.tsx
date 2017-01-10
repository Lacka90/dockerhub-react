import * as React from 'react';

export class Repo extends React.Component<any, undefined> {
  render() {
    return (
      <li>
        {this.props.repo_name}
      </li>
    );
  }
}
