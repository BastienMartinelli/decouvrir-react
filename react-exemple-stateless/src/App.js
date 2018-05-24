import React, { Component } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name="bob" />
      </div>
    );
  }
}

export default App;
