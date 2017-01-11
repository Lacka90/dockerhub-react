import * as React from 'react';
import { Link, hashHistory } from 'react-router';
import { store } from '../../store';
import { authenticate } from '../../reducers/actions';

import './header.scss';

export class Header extends React.Component<any, undefined> {
  private textInput: HTMLInputElement = null;

  navigateState() {
    const searchParam = this.textInput.value;
    hashHistory.push('/search/' + searchParam);
  }

  componentDidMount() {
    if (this.props.name) {
      this.textInput.value = this.props.name;
    }
  }

  logout = () => {
    window['FB'].logout();
    store.dispatch(authenticate({}));
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" activeClassName="active">DockerHub</Link>
          </div>
          
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Search"
                ref={(input) => { this.textInput = input; }} />
            </div>
            
            <button type="submit" className="btn btn-default"
                onClick={ this.navigateState.bind(this) }>
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </form>

          <div className="navbar-right">
            <p className="navbar-text">{this.props.user.name}</p>
            <img className="header-avatar" src={this.props.user.picture.data.url} />
            <span className="header-logout glyphicon glyphicon-off" onClick={this.logout}></span>
          </div>
        </div>
      </nav>
    );
  }
}
