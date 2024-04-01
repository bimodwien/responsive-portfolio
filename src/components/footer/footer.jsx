import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between text-center px-20 py-8 border-t-2 border-[#696969] bg-[rgba(32,32,32,1)] text-[#DEDEDE]">
        <div className="footer-name">
          Made by <b>Bimo Prabowo</b> -- copyright 2024
        </div>
        <div className="flex gap-10">
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <a href="mailto:bimodwien2@gmail.com">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
