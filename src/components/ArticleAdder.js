import React, { Component } from "react";
import { navigate } from "@reach/router";
import { postArticle } from "../api";
import ErrorPage from "./ErrorPage";
import styles from "../componentsCSS/ArticleAdder.module.css";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "coding",
    author: "",
    body: "",
    err: null
  };

  render() {
    const { title, topic, body, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <>
        <form onSubmit={this.handleAddArticle}>
          <input
            className={styles.Title}
            type="text"
            id="title"
            placeholder="Title"
            onChange={e => this.handleChange(e.target.value, "title")}
            value={title}
            required
          />
          <input
            className={styles.ArticleText}
            id="body"
            placeholder="Enter your article here..."
            onChange={e => this.handleChange(e.target.value, "body")}
            value={body}
            required
          />
          <div className={styles.ArticleAdderDivContainer}>
            <label className={styles.Label}>Topic: </label>
            <select
              className={styles.Dropdown}
              id="topic"
              onChange={e => this.handleChange(e.target.value, "topic")}
              value={topic}
            >
              <option value="coding">Coding</option>
              <option value="football">Football</option>
              <option value="cooking">Cooking</option>
            </select>
            <button className={styles.ArticleAdderButton}>Add Article</button>
          </div>
        </form>
      </>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleAddArticle = event => {
    event.preventDefault();
    const { title, topic, body } = this.state;
    const { author } = this.props;
    postArticle({
      title: title,
      topic: topic,
      body: body,
      author: author
    })
      .then(article => {
        this.props.setNewArticle(article);
        navigate(`/articles/${article.article_id}`);
        this.setState({
          title: "",
          topic: "coding",
          author: "",
          body: ""
        });
      })
      .catch(({ err }) => {
        this.setState({ err });
      });
  };
}

export default ArticleAdder;
