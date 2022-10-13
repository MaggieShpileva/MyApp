import React, { FC } from "react";
import photo from "../../img/h-about.jpg";
import styles from "./AboutConferens.module.scss";
type Props = {
  title: string;
};
export const AboutConferens: FC<Props> = (props) => {
  return (
    <div className={styles.about_conference}>
      <div className={styles.conteiner}>
        <div className={styles.row}>
          <div className={styles.foto}>
            <img src={photo} alt="" />
          </div>
          <div className={styles.text_info}>
            <h1 className={styles.text_h1}>{props.title}</h1>
            <p className={styles.text_style}>
              When I first got into the online advertising business, I was
              looking for the magical combination that would put my website into
              the top search engine rankings, catapult me to the forefront of
              the minds or individuals looking to buy my product, and generally
              make me rich beyond my wildest dreams! After succeeding in the
              business for this long, I am able to look back on my old self with
              this kind of thinking and shake my head.
            </p>

            <ul className={styles.text_ul}>
              <li className={styles.text_style}>
                <span className={styles.icon}> </span>
                Write On Your Business Card
              </li>
              <li className={styles.text_style}>
                <span className={styles.icon}> </span>
                Advertising Outdoors
              </li>
              <li className={styles.text_style}>
                <span className={styles.icon}> </span>
                Effective Advertising Pointers
              </li>
              <li className={styles.text_style}>
                <span className={styles.icon}> </span> Kook 2 Directory Add Url
                Free
              </li>
            </ul>
            <a className={styles.btn_conference} href="">
              Discover Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
