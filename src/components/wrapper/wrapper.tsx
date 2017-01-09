import * as React from "react";

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Wrapper extends React.Component<any, undefined> {
    render() {
        return (
          <div className="row">
            <div className="hidden-xs col-sm-3">
              <ul className="nav nav-pills nav-stacked">
                <li role="presentation" className="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-9">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic panel example
                </div>
              </div>
            </div>
          </div>
        );
    }
}
