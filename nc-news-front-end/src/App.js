import React, { Component } from "react";
import { Router } from "@reach/router";
// import styles from "./App.module.css";
import styles from "./App.css";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";

class App extends Component {
  state = {
    loggedInUser: "jessjelly"
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <Nav />
        <div className={styles.App}>
          <Router>
            <Articles loggedInUser={loggedInUser} path="/" />
            <Articles loggedInUser={loggedInUser} path="/topic/:topic" />
            <Article loggedInUser={loggedInUser} path="/articles/:article_id" />
            <Comments
              loggedInUser={loggedInUser}
              path="/articles/:article_id/comments"
            />
            <ErrorPage text="404: Page Not Found" default />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
