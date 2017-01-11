import * as React from 'react';
import { store } from '../../store';
import { authenticate } from '../../reducers/actions';

export class Dashboard extends React.Component<any, undefined> {
  logout() {
    window['FB'].logout();
    store.dispatch(authenticate({}));
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <a onClick={this.logout.bind(this)}>Log out</a>
      </div>
    );
  }
}
