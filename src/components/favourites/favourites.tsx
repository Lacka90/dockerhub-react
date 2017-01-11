import * as React from 'react';
import * as fetch from 'isomorphic-fetch';

import { Favourite } from '../favourite/favourite';
import { store } from '../../store';

export class Favourites extends React.Component<any, undefined> {
  render() {
    return (
      <ul>
        {
          this.props.favourites.map(favourite => {
            const key = `${favourite.namespace}/${favourite.name}`;
            return <Favourite key={ key } favourite={ favourite }>
              { favourite.name }
            </Favourite>
          })
        }
      </ul>
    );
  }
}
