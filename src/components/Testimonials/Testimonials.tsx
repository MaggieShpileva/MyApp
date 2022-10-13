import React, { FC, useState } from "react";
import styles from "./Testimonials.module.scss";
import { Header } from "../Header/Header.tsx";
import { Footer } from "../Footer/Footer.tsx";
import { store } from "../../Redux/store.ts";
import { Comment } from "../Comment/Comment.jsx";

export const Testimonials: FC = () => {
  const comments = store.Testimonials;
  const [text, setText] = useState("");
  console.log(comments);
  let add = () => {
    comments.newAddedComment(text);
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

      <div>{renderPage(comments.comments)}</div>
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
      <Footer />
    </div>
  );
};
