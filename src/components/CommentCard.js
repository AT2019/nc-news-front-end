import React from "react";
import Voter from "./Voter";
import styles from "./Comments.module.css";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <ul key={comment.comment_id} className={styles.CommentListItem}>
        <li>
          <p className={styles.Ptag}>Posted by: {comment.author}</p>
          <p className={styles.Ptag}>{comment.body}</p>
          <Voter votes={comment.votes} id={comment.comment_id} type="comment" />
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
    </div>
  );
};

export default CommentCard;
