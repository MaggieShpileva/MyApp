import React, { FC, useRef } from "react";
import styles from "../Footer/Footer.module.scss";
import { store } from "../../Redux/store.ts";

export const Footer: FC = () => {
  let renderImg = () => {
    return store.Footer.map((el, index) => (
      <img key={`${index.toString()}`} src={el.image} alt="" />
    ));
  };
  return (
    <div className={styles.Footer}>
      <div className={styles.images}>{renderImg()}</div>
    </div>
  );
};
