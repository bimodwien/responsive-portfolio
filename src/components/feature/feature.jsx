import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import Exercise from "../../assets/exercise1.png";
import Kanban from "../../assets/kanban_bimo.png";
import Calculator from "../../assets/calculator-bimo.png";
import Pokemon from "../../assets/pokemon_bimo.png";

const Feature = () => {
  const featuredWorks = [
    {
      href: "https://todolist-exercise.vercel.app/",
      alt: "Todo List",
      image: Exercise,
    },
    {
      href: "https://kanban-bimo.vercel.app/",
      alt: "Kanban Bimo",
      image: Kanban,
    },
    {
      href: "https://calculator-bimo.vercel.app/",
      alt: "Calculator",
      image: Calculator,
    },
    {
      href: "https://bimo-pokemon-next.vercel.app/",
      alt: "Pokemon",
      image: Pokemon,
    },
  ];

  return (
    <section id="work" className="py-16 bg-[#202020] text-[#dedede]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <FontAwesomeIcon icon={faArrowDownLong} className="h-8 w-8" />
          <h2 className="text-xl font-bold uppercase tracking-wider">
            Featured Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
            <FeatureItem key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ href, alt, image }) => (
  <a href={href} className="block group">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-xl font-bold">{alt}</span>
      </div>
    </div>
  </a>
);

export default Feature;
