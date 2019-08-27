import React, { Component } from "react";
// import articleBody from "../utils/articleBody";
import { getArticles, deleteArticleById } from "../api.js";
// import { Link } from "@reach/router";
import styles from "./Articles.module.css";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Sorter from "./Sorter";
import Orderer from "./Orderer";
import ArticleAdder from "./ArticleAdder";
import ArticleCard from "./ArticleCard";
// import formatDateAppearance from "../utils/formatDateAppearance";

class Articles extends Component {
  state = {
    articles: null,
    sort: "created_at",
    order: "desc",
    isLoading: true,
    err: null
  };
  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Articles are loading..." />;

    return (
      <div className={styles.MainDivContainer}>
        <Sorter setSort={this.setSort} />
        <Orderer setOrder={this.setOrder} />
        <ArticleAdder
          author={this.props.loggedInUser}
          setNewArticle={this.setNewArticle}
        />
        <ul className={styles.List}>
          {articles &&
            articles.map(article => {
              return (
                <ArticleCard
                  key={article.article_id}
                  loggedInUser={this.props.loggedInUser}
                  article={article}
                />
              );
            })}
        </ul>
      </div>
    );
  }

  fetchArticles = () => {
    getArticles(
      this.props.author,
      this.props.topic,
      this.state.sort,
      this.state.order
    )
      .then(({ articles }) => this.setState({ articles, isLoading: false }))
      .catch(err => this.setState({ err, isLoading: false }));
  };

  setSort = event => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  setOrder = event => {
    const { value } = event.target;
    if (value === "desc") {
      this.setState({
        order: "asc"
      });
    } else {
      this.setState({
        order: "desc"
      });
    }
  };

  setNewArticle = article => {
    this.setState({
      articles: [article, ...this.state.articles]
    });
  };

  deleteArticle = id => {
    deleteArticleById(id)
      .then(() => {
        this.setState(({ articles }) => {
          return {
            articles: articles.filter(article => article.article_id !== id)
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.author !== this.props.author ||
      prevProps.topic !== this.props.topic ||
      prevState.sort !== this.state.sort ||
      prevState.order !== this.state.order
    ) {
      this.fetchArticles();
    }
  }
}

export default Articles;
