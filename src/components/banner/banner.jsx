import React from "react";
import "./banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Avatar from "../../assets/Bimo-fotor.png";

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="flex px-20 py-36 bg-[rgba(32,32,32,1)] items-center gap-52"
      >
        <div className="flex flex-col  w-1/2 gap-10">
          <span className="title-font">
            Hi, I am Bimo. <br /> A Front End Developer.
          </span>
          <span className="subtitle-font">
            I help businesses and companies reach their goals by creating a
            websites in Front end Development.
          </span>
          <div>
            <button className="banner-button">
              <FontAwesomeIcon icon={faEnvelope} />
              Hi@yourname.com
            </button>
          </div>
        </div>
        <div className="avatar-space flex items-center justify-center size-96 ">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
