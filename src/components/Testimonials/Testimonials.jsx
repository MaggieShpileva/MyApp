import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import { Comment } from "../Comment/Comment";
import { addition } from "../../Redux/state";
import { newAddedComment } from "../../Redux/state";
import { Header } from "../Header/Header";

export const Testimonials = () => {
  const [text, setText] = useState("");

  let add = () => {
    newAddedComment(text);
    setText("");
  };

  let renderPage = (comments) => {
    return comments?.map((comment, index) => (
      <Comment
        key={`${comment.text.toString()}-${index}`}
        newComment={comment}
      />
    ));
  };

  return (
    <div className={styles.Comments}>
      <Header />
      <div className={styles.headerPage}>
        <h1>Testimonials</h1>
        <p>
          Our customers are our biggest supporters. What do they think of us?
        </p>
      </div>

      <div>{renderPage(addition.comments)}</div>
      <div className={styles.mainWindow}>
        <h2>Комментарии</h2>
        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>
        <button onClick={add}>Добавить</button>
      </div>
    </div>
  );
};
