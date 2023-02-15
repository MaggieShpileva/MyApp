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
import Speaker_10 from "../img/team-member/member-10.jpg";

import Blog_img_1 from "../img/blog/blog-1.jpg";
import Blog_img_2 from "../img/blog/blog-2.jpg";
import Blog_img_3 from "../img/blog/blog-3.jpg";
import Blog_img_4 from "../img/blog/blog-4.jpg";
import Blog_img_5 from "../img/blog/blog-5.jpg";
import Blog_img_6 from "../img/blog/blog-6.jpg";
import Blog_img_7 from "../img/blog/blog-7.jpg";
import Blog_img_8 from "../img/blog/blog-8.jpg";
import Blog_img_9 from "../img/blog/blog-9.jpg";

export type InfoData = {
  name: String;
  text: String;
  image: String;
};

type ImageType = {
  image: string;
};
type Performance = {
  theme: string;
  img: string;
  speaker: string;
  email: string;
  time_start: string;
  time_end: string;
  adress: string;
};

type Schedule = {
  section: Performance[];
};
type Store = {
  speakersPage: {
    info: InfoData[];
  };
  Testimonials: {
    comments: InfoData[];
    newAddedComment(text: string): void;
  };
  AboutUs: { name: string; image: string }[];
  Footer: ImageType[];
  Search: string;
  Blog: ImageType[];
  Schedule: Schedule[];
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
    { name: "Samuel Smith", image: Speaker_1 },
    { name: "	Olivia Harris", image: Speaker_2 },
    { name: "Joseph Lewis", image: Speaker_3 },
    { name: "Ava Walker", image: Speaker_4 },
    { name: "Amelia King", image: Speaker_5 },
    { name: "Emily Young", image: Speaker_6 },
    { name: "Jacob Moore", image: Speaker_7 },
    { name: "Thomas Brown", image: Speaker_8 },
    { name: "Isla Adamson", image: Speaker_9 },
    { name: "Oscar Parson", image: Speaker_10 },
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
  Blog: [
    { image: Blog_img_1 },
    { image: Blog_img_2 },
    { image: Blog_img_3 },
    { image: Blog_img_4 },
    { image: Blog_img_5 },
    { image: Blog_img_6 },
    { image: Blog_img_7 },
    { image: Blog_img_8 },
    { image: Blog_img_9 },
  ],
  Schedule: [
    {
      section: [
        {
          theme: "Dealing with Difficult People",
          img: Speaker_1,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "10:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "V7 Digital Photo Printing",
          img: Speaker_2,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "10:00 AM",
          time_end: "12:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "Beyond The Naked Eye",
          img: Speaker_3,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "12:00 AM",
          time_end: "2:00 PM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: " Influencing The Influencer",
          img: Speaker_4,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "3:00 PM",
          time_end: "5:00 PM",
          adress: "59 Breanne Canyon Suite, USA",
        },
      ],
    },
    {
      section: [
        {
          theme: "Dealing with Difficult People",
          img: Speaker_5,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "V7 Digital Photo Printing",
          img: Speaker_6,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "Beyond The Naked Eye",
          img: Speaker_8,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: " Influencing The Influencer",
          img: Speaker_9,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
      ],
    },
    {
      section: [
        {
          theme: "Dealing with Difficult People",
          img: Speaker_5,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "V7 Digital Photo Printing",
          img: Speaker_6,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "Beyond The Naked Eye",
          img: Speaker_8,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: " Influencing The Influencer",
          img: Speaker_9,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
      ],
    },
    {
      section: [
        {
          theme: "Dealing with Difficult People",
          img: Speaker_5,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "V7 Digital Photo Printing",
          img: Speaker_6,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "Beyond The Naked Eye",
          img: Speaker_8,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: " Influencing The Influencer",
          img: Speaker_9,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
      ],
    },
    {
      section: [
        {
          theme: "Dealing with Difficult People",
          img: Speaker_5,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "V7 Digital Photo Printing",
          img: Speaker_6,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: "Beyond The Naked Eye",
          img: Speaker_8,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
        {
          theme: " Influencing The Influencer",
          img: Speaker_9,
          speaker: "John Smith",
          email: "john@Colorlib.com",
          time_start: "8:00 AM",
          time_end: "8:00 AM",
          adress: "59 Breanne Canyon Suite, USA",
        },
      ],
    },
  ],
};
