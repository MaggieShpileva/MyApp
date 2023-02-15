import React, { FC } from "react";
import { store } from "../../Redux/store";

import styles from "./CardSpeaker.module.scss";

export const CardSpeaker: FC = () => {
  const renderSpeakers = () => {
    return store.AboutUs.map((item) => {
      return (
        <div className={styles.card_block} key={item.name}>
          <img src={item.image} alt="" />
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
          <div className={styles.text}>
            <h5>{item.name}</h5>
            <span>Speaker</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.CardSpeakers}>
      <div className={styles.sectionTitle}>
        <h1>Who’s speaking</h1>
        <p>These are our communicators, you can see each person information</p>
      </div>

      <div className={styles.cards}>{renderSpeakers()}</div>
    </div>
  );
};

//563492ad6f91700001000001d1f3950303644582a4d16317aecec8d1
