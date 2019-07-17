import React, { Component } from "react";
import { getCommentsByArticleId, deleteCommentById } from "../api.js";
import CommentAdder from "./CommentAdder";

class Comments extends Component {
  state = {
    comments: null
  };
  render() {
    const { comments } = this.state;
    return (
      <React.Fragment>
        <CommentAdder
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <div>
          {comments &&
            comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <p>{comment.author}</p>
                  <p>{comment.body}</p>
                  <p>Votes: {comment.votes}</p>
                  <button
                    onClick={() => this.deleteComment(comment.comment_id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
  fetchCommentsByArticleId() {
    getCommentsByArticleId(this.props.article_id).then(({ comments }) =>
      this.setState({ comments })
    );
  }
  componentDidMount() {
    this.fetchCommentsByArticleId(this.props.article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchCommentsByArticleId();
    }
  }

  addComment = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };

  deleteComment = id => {
    deleteCommentById(id)
      .then(() => {
        this.setState(({ comments }) => {
          return {
            comments: comments.filter(comment => comment.comment_id !== id)
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default Comments;
