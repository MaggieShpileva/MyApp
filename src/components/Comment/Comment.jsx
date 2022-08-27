import styles from "../Comment/Comment.module.scss";
import React from "react";

export const Comment = ({ newComment }) => {
  return (
    <div className={styles.Comment}>
      <div className={styles.CommentImg}>
        <img src={newComment.image} alt="" />
        <h1>{newComment.name}</h1>
      </div>

      <p>{newComment.text}</p>
    </div>
  );
};
