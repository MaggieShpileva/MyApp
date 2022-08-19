import React from "react";
import styles from "./AboutUs.module.scss";
import { Header } from "../Header/Header";
import { AboutConferens } from "../AboutConferens/AboutConferens";
import { CardSpeaker } from "../CardSpeaker/CardSpeaker";

import FirstSpeaker from "../../img/team-member/member-1.jpg";
import SecondSpeaker from "../../img/team-member/member-2.jpg";
import ThirdSpeaker from "../../img/team-member/member-3.jpg";
import FourthSpeaker from "../../img/team-member/member-4.jpg";
import FifthSpeaker from "../../img/team-member/member-5.jpg";
import SixthSpeaker from "../../img/team-member/member-6.jpg";
import SeventhSpeaker from "../../img/team-member/member-7.jpg";
import EighthSpeaker from "../../img/team-member/member-8.jpg";
import NinthSpeaker from "../../img/team-member/member-9.jpg";
import TenthSpeaker from "../../img/team-member/member-10.jpg";

const title = {
  title: "The 2019 Conference",
};
export const AboutUs = () => {
  return (
    <div>
      <div className={styles.About_us}>
        <Header />
        <div>
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
      <div className={styles.CardSpeaker}>
        <CardSpeaker image={FirstSpeaker} />
        <CardSpeaker image={SecondSpeaker} />
        <CardSpeaker image={ThirdSpeaker} />
        <CardSpeaker image={FourthSpeaker} />
        <CardSpeaker image={FifthSpeaker} />
      </div>
      <div className={styles.CardSpeaker}>
        <CardSpeaker image={SixthSpeaker} />
        <CardSpeaker image={SeventhSpeaker} />
        <CardSpeaker image={EighthSpeaker} />
        <CardSpeaker image={NinthSpeaker} />
        <CardSpeaker image={TenthSpeaker} />
      </div>
    </div>
  );
};
