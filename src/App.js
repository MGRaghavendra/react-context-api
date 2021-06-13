import React from "react";
import "./App.css";
import { MyContext } from "./context.api";
import Themedbutton from "./Themedbutton";
class App extends React.Component {
  white = "#ffffff";
  dark = "#000000";
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div
              style={{
                background:
                  context.state.theme === "light" ? this.white : this.dark,
              }}
              className="App"
            >
              <h1
                style={{
                  color:
                    context.state.theme === "light" ? this.dark : this.white,
                }}
              >
                Guru
              </h1>
              <Themedbutton />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default App;
