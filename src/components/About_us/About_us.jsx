import React from "react";
import "./About_us.css";
import { Header } from "../Header/Header";
export const About_us = () => {
  return (
    <div>
      <Header />
      <div className="About_us">
        <h1>Something About Us</h1>
        <p className="About_us_p">
          There are several ways people can make money online. From selling
          products to advertising. In this article I am going to explain the
          concept of contextual advertising.
        </p>
        <p className="About_us_p">
          First I will explain what contextual advertising is. Contextual
          advertising means the advertising of products on a website according
          to the content the page is displaying. For example if the content of a
          website was information on a Ford truck then the advertisements would
          be for Ford trucks for sale, or Ford servicing etc. It picks up the
          words on the page and displays ads that are similar to those words.
          Then when someone either performs an action or clicks on your page you
          will get paid.
        </p>
      </div>
    </div>
  );
};
