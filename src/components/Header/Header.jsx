import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <img className="logo_main" src={logo} />
      <ul>
        <li>
          <NavLink to="/home" className="point-menu">
            <link rel="stylesheet" href="Speakers" />
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="About_us" className="point-menu">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/Speakers" className="point-menu">
            Speakers
            <link rel="stylesheet" href="Speakers" />
          </NavLink>
        </li>

        <li>
          <a href="#" className="point-menu">
            schedule
          </a>
        </li>

        <li>
          <a href="#" className="point-menu">
            blog
          </a>
        </li>
        <li>
          <a href="#" className="point-menu">
            contacts
          </a>
        </li>
      </ul>
      <a href="#" className="button">
        Ticket
      </a>
    </div>
  );
};
