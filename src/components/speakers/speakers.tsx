import React, { FC } from "react";
import { Profile } from "../Profile/Profile.tsx";
import styles from "./speakers.module.scss";
import { Header } from "../Header/Header.tsx";
import { Footer } from "../Footer/Footer.tsx";
import { store } from "../../Redux/store.ts";
import { InfoData } from "../../Redux/store.ts";

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
              image={item.image}
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
