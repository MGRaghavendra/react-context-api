import React, { Component } from "react";
import Button from "./Button";
import { MyContext } from "./context.api";
export class Themedbutton extends Component {
  white = "#ffffff";
  dark = "#000000";
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => {
            return (
              <h2
                style={{
                  color:
                    context.state.theme === "light" ? this.dark : this.white,
                }}
              >
                Click the button changing theme <Button />
              </h2>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Themedbutton;
