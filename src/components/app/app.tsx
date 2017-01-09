import * as React from "react";

import { Header } from '../header/header';
import { Wrapper } from '../wrapper/wrapper';
import { Footer } from '../footer/footer';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<any, undefined> {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Header></Header>
              </div>
              <div className="col-xs-12">
                <Wrapper>Hello from APP!</Wrapper>
              </div>
              <div className="col-xs-12">
                <Footer></Footer>
              </div>
            </div> 
          </div>
        );
    }
}
