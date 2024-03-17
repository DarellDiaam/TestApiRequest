import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  //Fetch API data
  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((capsules) => console.log(capsules));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
