import React, { FC } from "react";
import { AboutConferens } from "../AboutConferens/index";
import { CardSpeaker } from "../CardSpeaker/CardSpeaker";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainInfo } from "../MainInfo/MainInfo";
import { Schedule } from "../Schedule";

const title = {
  title: "About Conference",
};

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <AboutConferens title={title.title} />
      <CardSpeaker />
      <Schedule />
      <Footer />
    </div>
  );
};
