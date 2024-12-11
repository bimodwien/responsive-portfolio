import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#202020] text-[#dedede]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-xl sm:text-2xl text-[#959595] font-semibold mb-12 max-w-3xl mx-auto">
          If you're looking to hire a Software Developer, I'm currently
          available for Fulltime and Freelance work.
        </p>
        <a
          href="mailto:bimodwien2@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#9d9d9d] text-white font-semibold rounded-md hover:bg-[#8a8a8a] transition-colors"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>hi@yourname.com</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
