import React from "react";
import InnerCardRectangles from "../InnerCardRectangles";

interface WhyUsCardProps {
  title: string;
  description: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description }) => {
  return (
    <div className="testimonial-card flex flex-col items-center rounded-2xl bg-[#d9e9ff] px-3 py-6 text-center">
      {/* Diagonal Line */}
      <div className="diagonal-line"></div>

      {/* Inner Card */}
      <div className="rounded-custom relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-[#f8f4fc] p-6 text-center shadow-md">
        {/* Curved Background */}
        <div className="curved-background"></div>

        {/* SVG Rectangles */}
        <InnerCardRectangles />

        {/* Title */}
        <p className="relative z-10 mb-4 text-lg font-extrabold text-[#642B93]">
          {title.length > 24 ? title : `${title.slice(0, 25)}...`}
        </p>

        {/* Description */}
        <p className="relative z-10 mb-4 text-[#642B93]">
          {description.length < 97
            ? description
            : `${description.slice(0, 97)}...`}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
