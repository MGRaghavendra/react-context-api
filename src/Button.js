import React, { Component } from "react";
import { MyContext } from "./context.api";

export class Button extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          console.log(context.state);
          return (
            <button onClick={context.Changetheme}>
              <h2>Click Me!</h2>
            </button>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Button;
