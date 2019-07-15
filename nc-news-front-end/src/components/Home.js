import React from "react";
import { Component } from "react";
import { Link } from "@reach/router";
import Articles from "./Articles";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="Home">
          <h1>NC-News</h1>
        </header>
        <Articles path="/" />
      </React.Fragment>
    );
  }
}

export default Home;
