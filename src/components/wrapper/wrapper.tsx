import * as React from 'react';
import { Link } from 'react-router';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import './menu.scss';

export class Wrapper extends React.Component<any, undefined> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header></Header>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="hidden-xs col-sm-3">
                <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">
                    <Link to="/search/asdasd" activeClassName="active">Search</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-9">
                {React.cloneElement(this.props.children, this.props)}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <Footer></Footer>
          </div>
        </div> 
      </div>
      
    );
  }
}
