import React, { Component } from "react";
import { getArticles, deleteArticleById } from "../api.js";
import styles from "../componentsCSS/Articles.module.css";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Sorter from "./Sorter";
import Orderer from "./Orderer";
import ArticleAdder from "./ArticleAdder";
import ArticleCard from "./ArticleCard";
import PageChanger from "./PageChanger";

class Articles extends Component {
  state = {
    articles: null,
    sort: "created_at",
    order: "desc",
    isLoading: true,
    err: null,
    p: 1,
    totalArticleCount: 0
  };
  render() {
    const { articles, isLoading, err, p, totalArticleCount } = this.state;
    const updatePage = p * 10;
    const finalPage = updatePage >= totalArticleCount;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Articles are loading..." />;
    return (
      <div className={styles.MainDivContainer}>
        <ArticleAdder
          author={this.props.loggedInUser}
          setNewArticle={this.setNewArticle}
        />
        <br />
        <label className={styles.Label}>Sort articles by: </label>
        <br />
        <Sorter onChange={this.handleChange} />
        <Orderer onChange={this.handleChange} />
        <ul className={styles.List}>
          {articles &&
            articles.map(article => {
              return (
                <ArticleCard
                  article={article}
                  key={article.article_id}
                  loggedInUser={this.props.loggedInUser}
                  deleteArticle={this.deleteArticle}
                />
              );
            })}
        </ul>
        <PageChanger p={p} finalPage={finalPage} setPage={this.setPage} />
      </div>
    );
  }

  fetchArticles = () => {
    const { author, topic } = this.props;
    const { sort, order, p } = this.state;
    getArticles(author, topic, sort, order, p)
      .then(({ articles, total_count }) => {
        this.setState({
          articles: articles,
          totalArticleCount: total_count,
          isLoading: false,
          err: null,
          p: p
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  setPage = p => {
    this.setState({ p: p });
  };

  setNewArticle = article => {
    this.setState(state => {
      return { articles: [article, ...state.articles] };
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
      prevProps.topic !== this.props.topic ||
      prevProps.author !== this.props.author ||
      prevState.sort !== this.state.sort ||
      prevState.order !== this.state.order ||
      prevState.p !== this.state.p
    ) {
      this.fetchArticles();
    }
    if (prevState.totalArticleCount !== this.state.totalArticleCount) {
      this.setState({ p: 1 });
    }
  }
}

export default Articles;
