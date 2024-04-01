import React from "react";
import "./feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import handphone from "../../assets/Handphone.png";
import design from "../../assets/Design.png";
import laptop from "../../assets/Macbook.png";
import adobe from "../../assets/Adobe.png";
import exercise from "../../assets/exercise1.png";

const Feature = () => {
  return (
    <>
      <div id="work">
        <div className="flex gap-10 px-20 py-5 font-bold bg-[rgba(32,32,32,1)] text-[#dedede] items-center">
          <div>
            <FontAwesomeIcon icon={faArrowDownLong} className="arrow-font" />
          </div>
          <div className="uppercase feature-work">featured work</div>
        </div>
        <div className="bg-[rgba(32,32,32,1)] px-20 flex gap-8 py-20">
          <div className="flex flex-col gap-8 mb-40">
            <a href="https://todolist-exercise.vercel.app/">
              <img
                src={exercise}
                alt="Todo List"
                className="feature-image hover:shadow-xl"
              />
            </a>
            <a href="">
              <img
                src={design}
                alt=""
                className="feature-image hover:shadow-xl"
              />
            </a>
          </div>
          <div className="flex flex-col-reverse gap-8">
            <a href="">
              <img
                src={laptop}
                alt=""
                className="feature-image hover:shadow-xl"
              />
            </a>
            <a href="">
              <img
                src={adobe}
                alt=""
                className="feature-image hover:shadow-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
