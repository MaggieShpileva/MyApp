import React, { FC } from "react";
import { store } from "../../Redux/store";
import styles from "./index.module.scss";

export const Events: FC = () => {
  console.log(store.AboutUs[0]);
  return (
    <>
      <div className={styles.events_container}>
        <div className={styles.card_one}>
          <img src={store.Blog[0].image} alt="" />
        </div>
        <div className={styles.card_two}>
          <img src={store.Blog[1].image} alt="" />
        </div>
        <div className={styles.card_three}>
          {" "}
          <img src={store.Blog[3].image} alt="" />
        </div>
        <div className={styles.card_four}>
          {" "}
          <img src={store.Blog[2].image} alt="" />
        </div>
        <div className={styles.card_five}>
          {" "}
          <img src={store.Blog[4].image} alt="" />
        </div>
        <div className={styles.card_six}>
          {" "}
          <img src={store.Blog[5].image} alt="" />
        </div>
        <div className={styles.card_seven}>
          {" "}
          <img src={store.Blog[6].image} alt="" />
        </div>
        <div className={styles.card_eight}>
          {" "}
          <img src={store.Blog[7].image} alt="" />
        </div>
        <div className={styles.card_nine}>
          {" "}
          <img src={store.Blog[8].image} alt="" />
        </div>
      </div>
    </>
  );
};
