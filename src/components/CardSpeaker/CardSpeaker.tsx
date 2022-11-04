import React, { FC } from "react";
import styles from "./CardSpeaker.module.scss";

type Props = {
  image: string;
};
export const CardSpeaker: FC<Props> = ({ image }) => {
  return (
    <div className={styles.cardSpeaker}>
      <div className={styles.block}>
        <img className={styles.block} src={image} alt="" />
        <div className={styles.active_block}>
          <a href="#">
            <i className={styles.facebook}></i>
          </a>
          <a href="#">
            <i className={styles.twitter}></i>
          </a>
          <a href="#">
            <i className={styles.instagram}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

//563492ad6f91700001000001d1f3950303644582a4d16317aecec8d1
