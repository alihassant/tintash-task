import React from "react";
import Card from "./components/Card";
import { cardData } from "./cardData";

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-[#3a46b4]">
      <div className="diagonal-line-projects"></div>
      {/* <div className="curve-diagonal-line-projects"></div> */}
      <div className="relative z-10 mx-auto mb-12 flex max-w-6xl flex-col items-center pt-20">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-[#2E8EFF]">OUR</span>{" "}
          <span className="text-white">PROJECTS</span>
        </h2>
        <p className="mt-4 w-[70%] text-center text-lg text-white">
          We craft every project piece by thinking of the end user. That&apos;s why
          our game development services make our clients succeed.
        </p>
      </div>

      <div className="rounded-tl-[50px] rounded-tr-[50px] bg-[#253694] bg-opacity-60 px-4 py-16 backdrop-blur-[6px] md:mx-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
