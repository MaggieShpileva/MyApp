import React from "react";
import { About_conferens } from "../About_conferens/About_conferens";
import { Header } from "../Header/Header";
import { Main_info } from "../Main_info/Main_info";

const title = {
  title: "About Conference",
};

export const Home = () => {
  return (
    <div>
      <Header />
      <Main_info />
      <About_conferens title={title.title} />
    </div>
  );
};
