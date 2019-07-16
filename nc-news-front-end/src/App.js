import React from "react";
import { Router } from "@reach/router";
import styles from "./App.module.css";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <Nav className={styles.Nav} />
      <div className={styles.App}>
        <Router>
          {/* <Home path="/" /> */}
          <Articles path="/" />
          <Articles path="/topic/:topic" />
          <Article path="/articles/:article_id" />
          <Comments path="/articles/:article_id/comments" />
          <ErrorPage text="404: Page Not Found" default />
        </Router>
      </div>
    </>
  );
}

export default App;
