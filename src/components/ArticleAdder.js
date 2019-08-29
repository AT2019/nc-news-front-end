import React, { Component } from "react";
import { postArticle } from "../api";
import styles from "./ArticleAdder.module.css";

class ArticleAdder extends Component {
  state = {
    title: "",
    topic: "coding",
    author: "",
    body: "",
    err: null
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddArticle}>
          <input
            className={styles.Title}
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
            value={this.state.title}
            required
          />
          <input
            className={styles.ArticleText}
            placeholder="Enter your article here..."
            onChange={this.handleBodyChange}
            value={this.state.body}
            required
          />
          <select
            className={styles.Dropdown}
            onChange={this.handleTopicChange}
            value={this.state.topic}
          >
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <button className={styles.ArticleAdderButton}>Add Article</button>
        </form>
      </>
    );
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
  handleAddArticle = event => {
    event.preventDefault();
    postArticle({
      title: this.state.title,
      topic: this.state.topic,
      body: this.state.body,
      author: this.props.author
    })
      .then(article => {
        console.log(article);
        this.props.setNewArticle(article);
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
