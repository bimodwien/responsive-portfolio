import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Avatar from "../../assets/Bimo-fotor.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="py-16 sm:py-24 lg:py-32 bg-[#202020] text-[#dedede]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:order-last lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img
                src={Avatar}
                alt="Bimo's avatar"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
              Hi, I am Bimo. <br /> A Software Developer.
            </h1>
            <p className="text-xl sm:text-2xl text-[#959595] font-semibold text-center lg:text-left">
              I help businesses and companies reach their goals by creating
              websites in Software Development.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="mailto:bimodwien2@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#9d9d9d] text-white font-semibold rounded-md hover:bg-[#8a8a8a] transition-colors"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
