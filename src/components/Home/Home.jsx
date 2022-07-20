import React from "react";
import { About_conferens } from "../About_conferens/About_conferens";
import { Header } from "../Header/Header";
import { Main_info } from "../Main_info/Main_info";
export const Home = () => {
  return (
    <div>
      <Header />
      <Main_info />
      <About_conferens />
    </div>
  );
};
