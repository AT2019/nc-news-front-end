import React, { Component } from "react";
import { getArticles } from "../api.js";
import { Link } from "@reach/router";
import styles from "./Articles.module.css";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Sorter from "./Sorter";

class Articles extends Component {
  state = {
    articles: null,
    sort: "created_at",
    isLoading: true,
    err: null
  };
  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Articles are loading..." />;

    return (
      <div>
        <Sorter setSort={this.setSort} />
        <ul className={styles.List}>
          {articles &&
            articles.map(article => {
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
                  <Link to={`/articles/${article.article_id}/comments`}>
                    <p>Comments: {article.comment_count}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  fetchArticles() {
    getArticles(this.props.topic, this.state.sort)
      .then(({ articles }) => this.setState({ articles, isLoading: false }))
      .catch(err => this.setState({ err, isLoading: false }));
  }

  setSort = event => {
    console.log(event);
    const { value } = event.target;
    this.setState({ sort: value });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort !== this.state.sort
    ) {
      this.fetchArticles();
    }
  }
}

export default Articles;
