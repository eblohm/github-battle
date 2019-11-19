import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import "./index.css";

// Components
// Can have state
// Has lifecycle methods
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
