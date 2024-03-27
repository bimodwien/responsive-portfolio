import React from "react";
import "./feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import handphone from "../../assets/Handphone.png";
import design from "../../assets/Design.png";
import laptop from "../../assets/Macbook.png";
import adobe from "../../assets/Adobe.png";

const Feature = () => {
  return (
    <>
      <div>
        <div className="flex gap-10 px-20 py-5 font-bold bg-[rgba(32,32,32,1)] text-[#dedede] items-center">
          <div>
            <FontAwesomeIcon icon={faArrowDownLong} className="arrow-font" />
          </div>
          <div className="uppercase feature-work">featured work</div>
        </div>
        <div className="bg-[rgba(32,32,32,1)] px-20 flex gap-8 py-20">
          <div className="flex flex-col gap-8 mb-40">
            <img src={handphone} alt="" className="feature-image" />
            <img src={design} alt="" className="feature-image" />
          </div>
          <div className="flex flex-col-reverse gap-8">
            <img src={laptop} alt="" className="feature-image" />
            <img src={adobe} alt="" className="feature-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
