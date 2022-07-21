import React, { FC } from "react";
import styles from "./CardSpeaker.module.scss";

type Props = {
  image: string,
};
export const CardSpeaker: FC<Props> = (props) => {
  return (
    <div className={styles.cardSpeaker}>
      <div className={styles.block}>
        <img className={styles.block} src={props.image} alt="" />
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
