import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainPage from "./index/components/MainPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-2">
          Simple Number Eye Baller{" "}
          <span className="text-success">
            <FontAwesomeIcon icon={["far", "eye"]} />
          </span>
        </h1>

        <MainPage />
      </div>
    );
  }
}

export default App;
