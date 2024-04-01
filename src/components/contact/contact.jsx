import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center items-center bg-[rgba(32,32,32,1)] gap-10 pt-36 pb-24 px-20"
      >
        <span className="font-bold text-4xl contact-me">Contact Me</span>
        <div className="contact-subtitle text-center font-semibold ">
          If you looking to hire a Front End Developer, I'm currently available
          for Fulltime and Freelance work.
        </div>
        <div className="">
          <button className="contact-button">
            <FontAwesomeIcon icon={faEnvelope} />
            hi@yourname.com
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
