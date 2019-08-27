import React, { Component } from "react";
import { getCommentsByArticleId, deleteCommentById } from "../api.js";
import CommentAdder from "./CommentAdder";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Voter from "./Voter";
import styles from "./Comments.module.css";

class Comments extends Component {
  state = {
    comments: null,
    isLoading: true,
    err: null
  };
  render() {
    const { comments, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Comments are loading..." />;
    return (
      <React.Fragment>
        <CommentAdder
          loggedInUser={this.props.loggedInUser}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <div>
          {comments &&
            comments.map(comment => {
              return (
                <ul key={comment.comment_id} className={styles.CommentListItem}>
                  <li>
                    <p className={styles.Ptag}>Posted by: {comment.author}</p>
                    <p className={styles.Ptag}>{comment.body}</p>
                    <Voter
                      votes={comment.votes}
                      id={comment.comment_id}
                      type="comment"
                    />
                    {this.props.loggedInUser === comment.author && (
                      <button
                        type="button"
                        className={styles.Button}
                        onClick={() => this.deleteComment(comment.comment_id)}
                      >
                        Delete My Comment
                      </button>
                    )}
                  </li>
                </ul>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
  fetchCommentsByArticleId = () => {
    getCommentsByArticleId(this.props.article_id)
      .then(({ comments }) => this.setState({ comments, isLoading: false }))
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };
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
