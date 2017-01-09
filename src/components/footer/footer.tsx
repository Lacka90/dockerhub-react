import * as React from "react";

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Footer extends React.Component<any, undefined> {
    render() {
        return (
          <h1>Footer!</h1>
        );
    }
}
