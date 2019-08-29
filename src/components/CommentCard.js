import React from "react";
import Voter from "./Voter";
import styles from "./Comments.module.css";

const CommentCard = ({ comment, loggedInUser, deleteComment }) => {
  return (
    <div>
      <ul className={styles.CommentListItem}>
        <li>
          <p className={styles.Ptag}>Posted by: {comment.author}</p>
          <p className={styles.Ptag}>{comment.body}</p>
          <Voter votes={comment.votes} id={comment.comment_id} type="comment" />
          {loggedInUser === comment.author && (
            <button
              type="button"
              className={styles.Button}
              onClick={() => deleteComment(comment.comment_id)}
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
