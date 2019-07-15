import React, { Component } from "react";
import { getArticles } from "../api.js";
import axios from "axios";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: null
  };
  render() {
    console.log(this.state.articles);
    console.log("in articles");
    return (
      <div>
        <h2>Articles</h2>
        <ul className="list">
          {this.state.articles &&
            this.state.articles.map(article => {
              console.log(article);
              return (
                <li key={article.article_id}>
                  <h3>{article.title}</h3>
                  <p>Author: {article.author}</p>
                  <Link to={`${article.topic}`}>
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
    console.log(this.props);
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
}

export default Articles;
