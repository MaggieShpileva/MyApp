import React, { FC } from "react";

import Twitter from "../../img/twitter-3_icon-icons.com_50735.png";
import "./Profile.css";

type Props = {
  image: string,
  title_1: string,
  text: string,
};

export const Profile: FC<Props> = (props) => {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="info">
        <h1 className="title_1">{props.title_1} </h1>
        <h4 className="title_2">Speakers</h4>
        <div className="main_logo">
          <a className="logo" href="#">
            f
          </a>
          <a className="logo" href="#">
            <img className="twitter" src={Twitter} />
          </a>
          <a className="logo" href="#">
            G
          </a>
        </div>
        <span className="text">{props.text}</span>
      </div>
    </div>
  );
};
