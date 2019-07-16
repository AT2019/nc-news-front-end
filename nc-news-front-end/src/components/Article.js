import React from "react";
import { getArticleById } from "../api.js";
import { Link } from "@reach/router";

class Article extends React.Component {
  state = {
    article: null
  };
  render() {
    const { article } = this.state;
    return article ? (
      <div>
        <h2>{article.title}</h2>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
        <Link to={`/topic/${article.topic}`}>
          <p>Topic: {article.topic}</p>
        </Link>
        <p>Votes: {article.votes}</p>
        <Link to={`/articles/${article.article_id}/comments`}>
          <p>Comments: {article.comment_count}</p>
        </Link>
      </div>
    ) : null;
  }
  fetchArticleById() {
    getArticleById(this.props.article_id).then(({ article }) =>
      this.setState({ article })
    );
  }

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
