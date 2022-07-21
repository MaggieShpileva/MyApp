import React from "react";
import styles from "./MainInfo.module.scss";
import Hero from "../../img/hero-right.png";
export const Main_info = () => {
  return (
    <div className={styles.main_info}>
      <div className={styles.conteiner}>
        <div className={styles.text_conteiner}>
          <p className={styles.info_p}>
            5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK
          </p>
          <h1 className={styles.info_h1}>
            Change Your Mind <br />
            To Become Sucess
          </h1>
          <a href="#" className={styles.button}>
            Buy Ticket
          </a>
        </div>

        <img className={styles.main_img} src={Hero} alt="" />
      </div>
    </div>
  );
};
