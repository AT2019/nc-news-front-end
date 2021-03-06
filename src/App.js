import React, { Component } from "react";
import { Router } from "@reach/router";
import styles from "./App.module.css";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import Articles from "./components/Articles";
import Article from "./components/Article";
import ArticleAdder from "./components/ArticleAdder";

class App extends Component {
  state = {
    loggedInUser: "jessjelly"
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <Nav loggedInUser={loggedInUser} />
        <div className={styles.App}>
          <Router>
            <Articles loggedInUser={loggedInUser} path="/" />
            <Articles
              loggedInUser={loggedInUser}
              topic={this.props.topic}
              path="/topic/:topic"
            />
            <Articles
              loggedInUser={loggedInUser}
              author={this.props.author}
              path="/authors/:author"
            />
            <Article loggedInUser={loggedInUser} path="/articles/:article_id" />
            <ArticleAdder loggedInUser={loggedInUser} path="/articles" />
            <ErrorPage text="404: Page Not Found" default />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
