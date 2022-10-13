import React, { FC } from "react";
import { AboutConferens } from "../AboutConferens/index.tsx";
import { Header } from "../Header/Header.tsx";
import { MainInfo } from "../MainInfo/MainInfo";

const title = {
  title: "About Conference",
};

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <AboutConferens title={title.title} />
    </div>
  );
};
