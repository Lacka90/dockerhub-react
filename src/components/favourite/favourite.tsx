import * as React from 'react';
import { Link } from 'react-router';

export class Favourite extends React.Component<any, undefined> {
  render() {
    const url = `/details/${this.props.favourite.namespace}/${this.props.favourite.name}`;
    return (
      <li>
        <Link to={ url }>
          { this.props.favourite.namespace }/{ this.props.favourite.name }
        </Link>
      </li>
    );
  }
}
