import React, { Component } from "react";
import { postComment } from "../api";

class CommentAdder extends Component {
  state = {
    body: ""
  };
  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">Post Comment</label>
        <input
          type="text"
          name="body"
          id="body"
          minlength="1"
          required
          value={body}
          onChange={event => this.handleChange(event.target.value, "body")}
        />
        <button>+</button>
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
