import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { hashHistory } from 'react-router';

import { store } from '../../store';
import { authenticate } from '../../reducers/actions';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Favourites } from '../favourites/favourites';

import './menu.scss';

export class Wrapper extends React.Component<any, any> {
  responseFacebook(response) {
    if (response.accessToken) {
      store.dispatch(authenticate(response));
      console.log(response);

      const path = this.props.router.getCurrentLocation();
      if (path) {
        return hashHistory.push(path.pathname);
      }
      return hashHistory.push('/');
    }
  }
  
  render() {
    if (this.props.user.accessToken) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Header name={this.props.params.name} user={this.props.user}></Header>
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
    } else {
      return <FacebookLogin
        appId="1648218652139190"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook.bind(this)} />
    }
  }
}
