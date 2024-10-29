"use client";

import React, { useEffect, useState } from "react";
import AboutUsCard from "./components/card/AboutUsCard";
import { aboutUsData } from "@/constants/data";
import BackgroundImages from "./components/BackgroundImages";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state on resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <section
      className={`${
        isMobile ? "" : "ramp"
      } scroll-mt- relative overflow-hidden bg-[#3a46b4] pb-10`}
      id="aboutus"
    >
      <BackgroundImages />
      <div className="diagonal-line-about-us"></div>
      <div className="relative z-10 mx-auto mb-12 flex max-w-6xl flex-col items-center pt-20">
        <h2 className="text-center text-4xl font-extrabold">
          <p className="text-white">MAKING GAMES SINCS 2008</p>
        </h2>
      </div>
      <div className="relative z-10 mx-6 rounded-tl-[50px] rounded-tr-[50px] bg-[#061F77] bg-opacity-50 py-16 backdrop-blur-[6px] md:mb-44 xl:mx-16">
        {/* Gradient Layer */}
        <div className="absolute inset-0 rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-tr from-[#061F77] to-[#00155F] opacity-30"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 sm:grid-cols-3 lg:grid-cols-5">
          {aboutUsData.map((data, index) => (
            <AboutUsCard
              key={index}
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
