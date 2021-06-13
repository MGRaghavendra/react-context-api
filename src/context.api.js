import React from "react";
const MyContext = React.createContext();
class MyProvider extends React.Component {
  state = {
    theme: "light",
  };

  hadle_theme = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          Changetheme: this.hadle_theme,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
