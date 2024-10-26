import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-[90vh] w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Hero image"
            fill
            style={{ objectFit: "cover" }}
            className="object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-8 text-white md:px-16 lg:px-24">
          <div className="md:w-[50%]">
            <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl">
              WE BUILD CHART-
              <br />
              TOPPING MOBILE GAMES.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl lg:text-2xl">
              We are a game studio led by Stanford, Apple, and PayPal Alumni. We
              are trusted development partners to Top Publishers, Large IPs,
              Unicorns, and Fortune 500s.
            </p>
          </div>
        </div>

        {/* SVG Elements */}
        <div className="absolute bottom-0 right-0 top-0 hidden md:flex md:w-1/2 lg:w-1/2">
          <div className="relative h-full w-full">
            {/* First SVG */}
            <svg
              viewBox="0 0 1782 1782"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle
                cx="892.5"
                cy="931.328"
                r="295.5"
                fill="#16296C"
                fillOpacity="0.33"
              />
              <path
                d="M1518 882.328C1518 1239.93 1228.1 1529.83 870.5 1529.83C512.896 1529.83 223 1239.93 223 882.328C223 524.724 512.896 234.828 870.5 234.828C1228.1 234.828 1518 524.724 1518 882.328Z"
                fill="#253D6F"
                fillOpacity="0.14"
              />
              <path
                d="M1509 882.328C1509 1234.96 1223.13 1520.83 870.5 1520.83C517.866 1520.83 232 1234.96 232 882.328C232 529.694 517.866 243.828 870.5 243.828C1223.13 243.828 1509 529.694 1509 882.328Z"
                stroke="#1C41C2"
                strokeOpacity="0.06"
                strokeWidth="18"
              />
              <circle
                cx="891"
                cy="891"
                r="882"
                stroke="#6976C1"
                strokeOpacity="0.05"
                strokeWidth="18"
              />
              <circle
                cx="891"
                cy="931"
                r="485"
                fill="#262E61"
                fillOpacity="0.13"
              />
              <circle
                cx="891"
                cy="931"
                r="476"
                stroke="#1C41C2"
                strokeOpacity="0.08"
                strokeWidth="18"
              />
              <circle
                cx="891"
                cy="930.828"
                r="372"
                fill="#183361"
                fillOpacity="0.11"
              />
            </svg>

            {/* Second SVG positioned over the first */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Pet_Idle_0051 8.svg"
                alt="Overlay SVG"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
              />
            </div>

            {/* Third SVG positioned at the bottom-right */}
            <div className="absolute bottom-0 right-0">
              <Image
                src="/Final_Pose-V2 2.png" // Replace with your SVG file name
                alt="Bottom Right SVG"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
