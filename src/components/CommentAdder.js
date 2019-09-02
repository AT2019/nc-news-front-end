import React, { Component } from "react";
import { postComment } from "../api";
import ErrorPage from "./ErrorPage";
import styles from "../componentsCSS/CommentAdder.module.css";

class CommentAdder extends Component {
  state = {
    body: "",
    err: null
  };
  render() {
    const { body, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label className={styles.Label} htmlFor="body">
          Add Your Comment Here....
        </label>
        <input
          className={styles.Input}
          type="text"
          name="body"
          id="body"
          minLength="1"
          required
          value={body}
          onChange={event => this.handleChange(event.target.value, "body")}
        />
        <button className={styles.CommentButton}>+</button>
      </form>
    );
  }

  handleChange = (text, value) => {
    this.setState({
      [value]: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { loggedInUser, article_id } = this.props;
    postComment(article_id, { body, username: loggedInUser })
      .then(newComment => {
        this.props.addComment(newComment);
        this.setState({ body: "" });
      })
      .catch(err => this.setState({ err, isLoading: false }));
  };
}

export default CommentAdder;
