import React, { FC } from "react";
import photo from "../../img/h-about.jpg";
import "./AboutConferens.css";
type Props = {
  title: string,
};
export const AboutConferens: FC<Props> = (props) => {
  return (
    <div className="about-conference">
      <div className="conteiner">
        <div className="row">
          <div className="foto">
            <img src={photo} alt="" />
          </div>
          <div className="text_info">
            <h1 className="text_h1">{props.title}</h1>
            <p className="text_style">
              When I first got into the online advertising business, I was
              looking for the magical combination that would put my website into
              the top search engine rankings, catapult me to the forefront of
              the minds or individuals looking to buy my product, and generally
              make me rich beyond my wildest dreams! After succeeding in the
              business for this long, I am able to look back on my old self with
              this kind of thinking and shake my head.
            </p>

            <ul className="text_ul">
              <li className="text_style">
                <span className="icon"> </span>
                Write On Your Business Card
              </li>
              <li className="text_style">
                <span className="icon"> </span>
                Advertising Outdoors
              </li>
              <li className="text_style">
                <span className="icon"> </span>
                Effective Advertising Pointers
              </li>
              <li className="text_style">
                <span className="icon"> </span> Kook 2 Directory Add Url Free
              </li>
            </ul>
            <a className="btn-conference" href="">
              Discover Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
