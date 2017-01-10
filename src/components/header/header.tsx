import * as React from 'react';
import { Link, hashHistory } from 'react-router';

export class Header extends React.Component<any, undefined> {
  private textInput: HTMLInputElement = null;

  navigateState() {
    const searchParam = this.textInput.value;
    hashHistory.push('/search/' + searchParam);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" activeClassName="active">DockerHub</Link>
          </div>
          
          <form className="navbar-form navbar-right">
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
        </div>
      </nav>
    );
  }
}
