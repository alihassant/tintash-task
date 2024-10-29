import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
}) => {
  return (
    <div className="testimonial-card flex flex-col items-center rounded-2xl bg-[#d9e9ff] p-6 text-center">
      {/* Diagonal Line */}
      <div className="diagonal-line"></div>

      {/* Inner card div with rounded corners */}
      <div className="rounded-custom relative flex flex-col items-center overflow-hidden rounded-lg bg-[#f8f4fc] p-6 text-center shadow-md">
        {/* Curved Background */}
        <div className="curved-background"></div>

        {/* Quote Icon */}
        <Image
          src="/quote.svg"
          width={40}
          height={40}
          alt="Quote Icon"
          className="relative z-10 mb-4 mt-4"
          loading={"eager"}
        />

        {/* Quote Text */}
        <p className="relative z-10 mb-4 text-lg text-[#642B93]">
          {quote.length < 75 ? quote : `${quote.slice(0, 75)}...`}
        </p>

        {/* Author and Position */}
        <div className="relative z-10 mt-auto">
          <p className="text-xl font-semibold text-[#7166F3]">{author}</p>
          <p className="text-sm text-[#642B93]">{position}</p>
          <hr className="border-t-1 mx-auto my-4 w-1/2 border-gray-300" />
          <p className="mt-2 text-2xl font-extrabold text-[#3F4EAA]">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
