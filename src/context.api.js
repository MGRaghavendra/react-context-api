import React from "react";
const MyContext = React.createContext();
class MyProvider extends React.Component {
  state = {
    name: "Guru Raghavendra",
    age: 21,
    job: "Developer",
    is_working: false,
    theme: "light",
  };
  is_working = () => {
    console.log("Guru is Working");
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
          is_working: this.is_working,
          Changetheme: this.hadle_theme,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
