import FirstSpeaker from "../img/speakers/speaker-1.jpg";
import SecondSpeaker from "../img/speakers/speaker-2.jpg";
import ThirdSpeaker from "../img/speakers/speaker-3.jpg";
import FourthSpeaker from "../img/speakers/speaker-4.jpg";
import FifthSpeaker from "../img/speakers/speaker-5.jpg";
import SixSpeaker from "../img/speakers/speaker-6.jpg";

import CommentFotoFirst from "../img/schedule/schedule-3.jpg";
import CommentFotoSecond from "../img/schedule/schedule-2.jpg";
import CommentFotoGuest from "../img/schedule/guest.png";
export let state = {
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
};

export let addition = {
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
};

export let newAddedComment = (text) => {
  let comment = {
    name: "Guest",
    text: text,
    image: CommentFotoGuest,
  };

  addition.comments.push(comment);
};
