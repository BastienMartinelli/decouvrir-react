import React, { Component } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cpt: 0
    };
  }

  increment = () => {
    this.setState({ cpt: this.state.cpt + 1 });
  };

  raz = () => {
    this.setState({ cpt: 0 });
  };

  render() {
    return (
      <div className="App">
        <Greeting name="bob" click={this.state.cpt} />
        <button type="button" onClick={this.increment}>
          Click!
        </button>
        <button type="button" onClick={this.raz}>
          RAZ
        </button>
      </div>
    );
  }
}

export default App;
