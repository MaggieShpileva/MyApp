import React, { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img className="logo_main" src={logo} />
      <ul>
        <li>
          <NavLink to="/" className={styles.point_menu}>
            <link rel="stylesheet" href="Speakers" />
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" className={styles.point_menu}>
            <link rel="stylesheet" href="AboutUs" />
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/Speakers" className={styles.point_menu}>
            Speakers
            <link rel="stylesheet" href="Speakers" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/Testimonials" className={styles.point_menu}>
            Testimonials
            <link rel="stylesheet" href="Testimonials " />
          </NavLink>
        </li>

        <li>
          <NavLink to="/Blog" className={styles.point_menu}>
            blog
            <link rel="stylesheet" href="Blog " />
          </NavLink>
        </li>
        <li>
          <a href="#" className={styles.point_menu}>
            contacts
          </a>
        </li>
      </ul>
      <a href="#" className={styles.button}>
        Ticket
      </a>
    </div>
  );
};
