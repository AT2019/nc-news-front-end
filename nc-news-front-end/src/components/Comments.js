import React, { Component } from "react";
import { getCommentsByArticleId } from "../api.js";

class Comments extends Component {
  state = {
    comments: null
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.comments &&
          this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
      </div>
    );
  }
  fetchCommentsByArticleId() {
    getCommentsByArticleId(this.props.article_id).then(({ comments }) =>
      this.setState({ comments })
    );
  }
  componentDidMount() {
    console.log(this.props.article_id);
    this.fetchCommentsByArticleId(this.props.article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchCommentsByArticleId();
    }
  }
}

export default Comments;
