import React, { Component } from "react";
import { getArticles } from "../api.js";
import { Link } from "@reach/router";
import styles from "./Articles.module.css";

class Articles extends Component {
  state = {
    articles: null
  };
  render() {
    return (
      <div>
        <ul className={styles.List}>
          {this.state.articles &&
            this.state.articles.map(article => {
              return (
                <li key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                  </Link>
                  <p>Author: {article.author}</p>
                  <Link to={`/topic/${article.topic}`}>
                    <p>Topic: {article.topic}</p>
                  </Link>
                  <p>Created at: {article.created_at}</p>
                  <p>Votes: {article.votes}</p>
                  <p>Comments: {article.comment_count}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  fetchArticles() {
    getArticles(this.props.topic).then(({ articles }) =>
      this.setState({ articles })
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
}

export default Articles;
