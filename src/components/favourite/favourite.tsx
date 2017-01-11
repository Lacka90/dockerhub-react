import * as React from 'react';

export class Favourite extends React.Component<any, undefined> {
  render() {
    return (
      <li>
        { this.props.favourite.name }
      </li>
    );
  }
}
