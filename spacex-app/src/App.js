import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import capsules from "./components/capsules";

class App extends Component {
  constructor() {
    super();

    this.state = {
      capsules: [],
    };
  }
  //Fetch API data
  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((response) => response.json())
      .then((capsules) => this.setState({ capsules: capsules }));
  }

  render() {
    return (
      <div className="App">
        {this.state.capsules.map((capsules) => (
          <div>
            <h1>{capsules.capsule_serial}</h1>
            <span style={{ fontWeight: "900" }}>{capsules.capsule_id}</span>
            <br />
            <span>{capsules.status}</span> <br />
            <span>{capsules.original_launch}</span> <br />
            <span>{capsules.original_launch_unix}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
