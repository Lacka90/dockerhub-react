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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Dashboard</h3>
        </div>
        <div className="panel-body">
          <pre style={ {whiteSpace: 'pre-wrap'} }>{JSON.stringify(this.props.user, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
