import * as React from 'react';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Favourites } from '../favourites/favourites';

import './menu.scss';

export class Wrapper extends React.Component<any, undefined> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header name={this.props.params.name}></Header>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="hidden-xs col-sm-3">
                <Favourites favourites={this.props.favourites}></Favourites>
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
