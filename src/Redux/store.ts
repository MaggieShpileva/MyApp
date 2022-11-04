import FirstSpeaker from "../img/speakers/speaker-1.jpg";
import SecondSpeaker from "../img/speakers/speaker-2.jpg";
import ThirdSpeaker from "../img/speakers/speaker-3.jpg";
import FourthSpeaker from "../img/speakers/speaker-4.jpg";
import FifthSpeaker from "../img/speakers/speaker-5.jpg";
import SixSpeaker from "../img/speakers/speaker-6.jpg";
import CommentFotoFirst from "../img/schedule/schedule-3.jpg";
import CommentFotoSecond from "../img/schedule/schedule-2.jpg";
import CommentFotoGuest from "../img/schedule/guest.png";
import FooterImg1 from "../img/partner-logo/logo-1.png";
import FooterImg2 from "../img/partner-logo/logo-2.png";
import FooterImg3 from "../img/partner-logo/logo-3.png";
import FooterImg4 from "../img/partner-logo/logo-4.png";
import FooterImg5 from "../img/partner-logo/logo-5.png";
import FooterImg6 from "../img/partner-logo/logo-6.png";

import Speaker_1 from "../img/team-member/member-1.jpg";
import Speaker_2 from "../img/team-member/member-2.jpg";
import Speaker_3 from "../img/team-member/member-3.jpg";
import Speaker_4 from "../img/team-member/member-4.jpg";
import Speaker_5 from "../img/team-member/member-5.jpg";
import Speaker_6 from "../img/team-member/member-6.jpg";
import Speaker_7 from "../img/team-member/member-7.jpg";
import Speaker_8 from "../img/team-member/member-8.jpg";
import Speaker_9 from "../img/team-member/member-9.jpg";

export type InfoData = {
  name: String;
  text: String;
  image: String;
};

type ImageType = {
  image: string;
};

type Store = {
  speakersPage: {
    info: InfoData[];
  };
  Testimonials: {
    comments: InfoData[];
    newAddedComment(text: string): void;
  };
  AboutUs: ImageType[];
  Footer: ImageType[];
  Search: string;
};

export let store: Store = {
  speakersPage: {
    info: [
      {
        name: "Jayden Gill",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: FirstSpeaker,
      },

      {
        name: "Mary Jane",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: SecondSpeaker,
      },

      {
        name: "Jack Human",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: ThirdSpeaker,
      },

      {
        name: "Sara Brudt",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: FourthSpeaker,
      },

      {
        name: "Emma Sandoval",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: FifthSpeaker,
      },

      {
        name: "Harriet Freeman",
        text: "Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper.",
        image: SixSpeaker,
      },
    ],
  },
  Testimonials: {
    comments: [
      {
        name: "John Smith",
        text: "There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement.",
        image: CommentFotoFirst,
      },

      {
        name: "Emma Sandoval",
        text: "First impression is made by logo or its absence. To know the importance of a logo just answer one question: How many big, leading and famous companies don’t have logos?",
        image: CommentFotoSecond,
      },
    ],
    newAddedComment(text) {
      let comment = {
        name: "Guest",
        text: text,
        image: CommentFotoGuest,
      };

      this.comments.push(comment);
    },
  },
  AboutUs: [
    { image: Speaker_1 },
    { image: Speaker_2 },
    { image: Speaker_3 },
    { image: Speaker_4 },
    { image: Speaker_5 },
    { image: Speaker_6 },
    { image: Speaker_7 },
    { image: Speaker_8 },
    { image: Speaker_9 },
  ],

  Footer: [
    { image: FooterImg1 },
    { image: FooterImg2 },
    { image: FooterImg3 },
    { image: FooterImg4 },
    { image: FooterImg5 },
    { image: FooterImg6 },
  ],
  Search: "",
};
