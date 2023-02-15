import React, { FC } from "react";
import styles from "../AboutUs/AboutUs.module.scss";
import { Header } from "../Header/Header";
import { AboutConferens } from "../AboutConferens/index";
import { CardSpeaker } from "../CardSpeaker/CardSpeaker";
import { store } from "../../Redux/store";
import { Footer } from "../Footer/Footer";

type Props = {
  title: string;
};
const title = {
  title: "The 2019 Conference",
};
export const AboutUs: FC<Props> = () => {
  return (
    <>
      <Header />

      <div className={styles.div_about_us}>
        <div className={styles.about_us}>
          <div className={styles.info}>
            <h1>Something About Us</h1>
            <p>
              There are several ways people can make money online. From selling
              products to advertising. In this article I am going to explain the
              concept of contextual advertising.
            </p>
            <p className={styles.About_us_p}>
              First I will explain what contextual advertising is. Contextual
              advertising means the advertising of products on a website
              according to the content the page is displaying. For example if
              the content of a website was information on a Ford truck then the
              advertisements would be for Ford trucks for sale, or Ford
              servicing etc. It picks up the words on the page and displays ads
              that are similar to those words. Then when someone either performs
              an action or clicks on your page you will get paid.
            </p>
          </div>
          <AboutConferens title={title.title} />
        </div>
      </div>
    </>
  );
};
