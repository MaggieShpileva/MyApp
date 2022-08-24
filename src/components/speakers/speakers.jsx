import React from "react";
import { Profile } from "../Profile/Profile";
import "./speakers.css";
import { Header } from "../Header/Header";

export const Speakers = ({ info }) => {
  return (
    <div>
      <Header />
      <div className="Speakers">
        {info.map((item, index) => {
          return (
            <Profile
              key={`${item.name}-${index}`}
              image={item.image}
              title={item.name}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};
