import React, { FC } from "react";
import Twitter from "../../img/twitter-3_icon-icons.com_50735.png";
import styles from "./Profile.module.scss";

type Props = {
  image?: string;
  title: String;
  text: String;
};

export const Profile: FC<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.info}>
        <h1 className={styles.title_1}>{title} </h1>
        <h4 className={styles.title_2}>Speakers</h4>
        <div className={styles.main_logo}>
          <a className={styles.logo} href="#">
            F
          </a>
          <a className={styles.logo} href="#">
            <img className={styles.twitter} src={Twitter} />
          </a>
          <a className={styles.logo} href="#">
            G
          </a>
        </div>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};
