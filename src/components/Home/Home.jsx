import React from "react";
import { AboutConferens } from "../AboutConferens/AboutConferens";
import { Header } from "../Header/Header";
import { MainInfo } from "../MainInfo/MainInfo";

const title = {
  title: "About Conference",
};

export const Home = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <AboutConferens title={title.title} />
    </div>
  );
};
