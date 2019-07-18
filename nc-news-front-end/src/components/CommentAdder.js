import React, { Component } from "react";
import { postComment } from "../api";
import styles from "./CommentAdder.module.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };
  render() {
    const { body } = this.state;
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
        <button className={styles.Button}>+</button>
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
    postComment(article_id, { body, username: loggedInUser }).then(
      newComment => {
        this.props.addComment(newComment);
      }
    );
  };
}

export default CommentAdder;
