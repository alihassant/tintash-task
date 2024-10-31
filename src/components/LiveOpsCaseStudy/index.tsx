import Image from "next/image";
import React from "react";
import LiveOpsOutcome from "./components/LiveOpsOutcome";
import MainCenterImage from "./components/MainCenterImage";
import Rating from "./components/Rating";

const LiveOpsCaseStudy = () => {
  return (
    <>
      <div className="mx-auto mb-14 max-w-6xl pt-28">
        <h2 className="text-center text-3xl font-extrabold">
          <span className="text-[#2E8EFF]">FEATURED</span>{" "}
          <span className="text-[#391978]">LIVEOPS CASE STUDY</span>
        </h2>
      </div>
      <main className="relative flex min-h-screen flex-col items-center pb-44 xl:pb-0">
        {/* SVG Container for circles */}
        <svg
          className="absolute left-0 top-0 h-full w-full" // Positions the SVG absolutely within the parent container
          viewBox="0 0 800 800" // Change the viewport size if you need different dimensions for your SVG
        >
          {/* Circle 1 */}
          <circle
            cx="50%" // Centered horizontally
            cy="30%" // Centered vertically; adjust this for vertical positioning
            r="225" // Radius of Circle 1
            fill="#e5f6ff" // Fill color for Circle 1; change this to your desired color
            // Example of a different color: fill="#2E8EFF"
          />

          {/* Circle 2 - Positioned slightly to the bottom right of Circle 1 */}
          <circle
            cx="60%" // Centered horizontally; adjust for right positioning
            cy="55%" // Centered vertically; adjust for downward positioning
            r="112.5" // Radius of Circle 2
            fill="#e5f6ff" // Fill color for Circle 2; change this to your desired color
            // Example of a different color: fill="#e5f6ff"
          />
        </svg>

        {/* Grid layout for content */}
        <div className="relative z-10 grid w-[90%] grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <LiveOpsOutcome />
          </div>
          <div className="flex justify-center">
            <MainCenterImage />
          </div>
          <div className="flex items-center justify-center">
            <Rating />
          </div>
        </div>

        {/* Image positioned at the bottom-left with responsive settings */}
        <div className="absolute bottom-0 left-0 w-full max-w-md">
          <Image
            src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/liveOps/liveOpsBottomLeft.svg"
            alt="LiveOps Case Study"
            layout="responsive" // Use responsive layout for the image
            width={500}
            height={400}
            loading={"eager"}
          />
        </div>
      </main>
    </>
  );
};

export default LiveOpsCaseStudy;
