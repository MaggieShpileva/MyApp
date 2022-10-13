import React, { FC } from "react";
import styles from "../AboutUs/AboutUs.module.scss";
import { Header } from "../Header/Header.tsx";
import { AboutConferens } from "../AboutConferens/index.tsx";
import { CardSpeaker } from "../CardSpeaker/CardSpeaker.tsx";
import { store } from "../../Redux/store.ts";
import { Footer } from "../Footer/Footer.tsx";

type Props = {
  title: string;
};
const title = {
  title: "The 2019 Conference",
};
export const AboutUs: FC<Props> = () => {
  const renderSpeakers = () => {
    return store.AboutUs.map((item, index) => {
      return <CardSpeaker key={`${index.toString()}`} image={item.image} />;
    });
  };
  return (
    <div className={styles.div_about_us}>
      <div className={styles.about_us}>
        <Header />
        <div className={styles.info}>
          <h1>Something About Us</h1>
          <p>
            There are several ways people can make money online. From selling
            products to advertising. In this article I am going to explain the
            concept of contextual advertising.
          </p>
          <p className={styles.About_us_p}>
            First I will explain what contextual advertising is. Contextual
            advertising means the advertising of products on a website according
            to the content the page is displaying. For example if the content of
            a website was information on a Ford truck then the advertisements
            would be for Ford trucks for sale, or Ford servicing etc. It picks
            up the words on the page and displays ads that are similar to those
            words. Then when someone either performs an action or clicks on your
            page you will get paid.
          </p>
        </div>
        <AboutConferens title={title.title} />
        <div className={styles.sectionTitle}>
          <h1>Who’s speaking</h1>
          <p>
            These are our communicators, you can see each person information
          </p>
        </div>
      </div>
      <div className={styles.CardSpeaker}>{renderSpeakers()}</div>
      {/* <Footer /> */}
    </div>
  );
};
