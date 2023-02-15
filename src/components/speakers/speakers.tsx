import React, { FC } from "react";
import { Profile } from "../Profile/Profile";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { store } from "../../Redux/store";
import { InfoData } from "../../Redux/store";

import styles from "./speakers.module.scss";

export const Speakers: FC = () => {
  const info: InfoData[] = store.speakersPage.info;

  return (
    <div>
      <Header />
      <div className={styles.Speakers}>
        {info.map((item, index) => {
          return (
            <Profile
              key={`${item.name}-${index}`}
              image={item.image as string}
              title={item.name}
              text={item.text}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
