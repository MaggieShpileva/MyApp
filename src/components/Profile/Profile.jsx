import React, { FC } from "react";
import Twitter from "../../img/twitter-3_icon-icons.com_50735.png";
import "./Profile.css";

export const Profile = ({ image, title, text }) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="info">
        <h1 className="title_1">{title} </h1>
        <h4 className="title_2">Speakers</h4>
        <div className="main_logo">
          <a className="logo" href="#">
            F
          </a>
          <a className="logo" href="#">
            <img className="twitter" src={Twitter} />
          </a>
          <a className="logo" href="#">
            G
          </a>
        </div>
        <span className="text">{text}</span>
      </div>
    </div>
  );
};
