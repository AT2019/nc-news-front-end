import React from "react";
import { getArticleById } from "../api.js";
import { Link } from "@reach/router";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Voter from "./Voter";
import styles from "../componentsCSS/Article.module.css";
import Comments from "./Comments";

class Article extends React.Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };
  render() {
    const { article, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Article is loading..." />;
    return article ? (
      <div>
        <div className={styles.Div}>
          <h2 className={styles.Title}>{article.title}</h2>
          <p className={styles.Ptag}>Author: {article.author}</p>
          <Link to={`/authors/${article.author}`}>
            <p className={styles.Ptag}>
              Read more articles by {article.author}
            </p>
          </Link>
          <p className={styles.Ptag}>{article.body}</p>
          <Link className={styles.Link} to={`/topic/${article.topic}`}>
            <p className={styles.Ptag}>
              Click here for more articles on... {article.topic}
            </p>
          </Link>
          <Voter
            className={styles.Voter}
            votes={article.votes}
            id={article.article_id}
            type="article"
          />
          <p className={styles.Ptag}>Comments: {article.comment_count}</p>
        </div>
        <Comments
          loggedInUser={this.props.loggedInUser}
          article_id={this.props.article_id}
        />
      </div>
    ) : null;
  }

  fetchArticleById = () => {
    getArticleById(this.props.article_id)
      .then(({ article }) => this.setState({ article, isLoading: false }))
      .catch(err => this.setState({ err, isLoading: false }));
  };

  componentDidMount() {
    this.fetchArticleById(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticleById();
    }
  }
}

export default Article;
