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
    </>
  );
};

export default Hero;
