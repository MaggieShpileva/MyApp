import React from "react";
import "./Main_info.css";
import Hero from "../../img/hero-right.png";
export const Main_info = () => {
  return (
    <div className="main-info">
      <div className="conteiner">
        <div className="text-conteiner">
          <p className="info-p">5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK</p>
          <h1 className="info_h1">
            Change Your Mind <br />
            To Become Sucess
          </h1>
          <a href="#" className="button">
            Buy Ticket
          </a>
        </div>

        <img className="main-info-img" src={Hero} alt="" />
      </div>
    </div>
  );
};
