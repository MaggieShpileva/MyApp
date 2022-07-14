import React from "react";
import { Profile } from "../Profile/Profile";
import "./speakers.css";
import FirstSpeaker from "../../img/speakers/speaker-1.jpg";
import SecondSpeaker from "../../img/speakers/speaker-2.jpg";
import ThirdSpeaker from "../../img/speakers/speaker-3.jpg";
import FourthSpeaker from "../../img/speakers/speaker-4.jpg";
import FifthSpeaker from "../../img/speakers/speaker-5.jpg";
import SixSpeaker from "../../img/speakers/speaker-6.jpg";
const info = {
  name_1: "Jayden Gill",
  text_1:
    "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
  name_2: "Mary Jane",
  text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
  name_3: "Jack Human",
  name_4: "Sara Brudt",
  name_5: "Emma Sandoval",
  name_6: "Harriet Freeman",
};

export const Speakers = () => {
  return (
    <div className="Speakers">
      <Profile image={FirstSpeaker} title_1={info.name_1} text={info.text_1} />
      <Profile image={SecondSpeaker} title_1={info.name_2} text={info.text} />
      <Profile image={ThirdSpeaker} title_1={info.name_2} text={info.text} />
      <Profile image={FourthSpeaker} title_1={info.name_2} text={info.text} />
      <Profile image={FifthSpeaker} title_1={info.name_2} text={info.text} />
      <Profile image={SixSpeaker} title_1={info.name_2} text={info.text} />

      <Profile image={FirstSpeaker} title_1={info.name_1} text={info.text_1} />
      <Profile image={SixSpeaker} title_1={info.name_2} text={info.text} />
    </div>
  );
};
