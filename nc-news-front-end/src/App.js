import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
// import NavLink from "./components/NavLink";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Nav />
      <div className="app">
        <Router>
          <Home path="/" />
          <Articles path="/" />
          <Articles path="/:topic" />
          <ErrorPage text="404: Page Not Found" default />
        </Router>
      </div>
    </>
  );
}

export default App;
