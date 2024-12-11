import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#202020] text-[#dedede] border-t border-[#696969]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#959595] mb-4 sm:mb-0">
            Made by{" "}
            <span className="font-bold text-[#dedede]">Bimo Prabowo</span> --
            copyright 2024
          </p>
          <div className="flex gap-6">
            <SocialLink icon={faWhatsapp} href="https://wa.me/6281282525002" />
            <SocialLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/bimodwien/"
            />
            <SocialLink icon={faEnvelope} href="mailto:bimodwien2@gmail.com" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    className="text-2xl hover:text-gray-300 transition-colors"
    target="_blank"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default Footer;
