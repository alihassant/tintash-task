import Image from "next/image";
import React from "react";

const BackGroundCircles = () => {
  return (
    <div>
      {/* Circle 1 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50%" // Center X at 50% of the SVG width
            cy="50%" // Center Y at 50% of the SVG height
            r="65%" // Radius at 40% of the smallest dimension (width or height)
            fill="#4C56AB" // Circle color
            opacity="0.3" // Adjust transparency
          />
        </svg>
      </div>

      {/* Circle 2 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50%" // Center X at 50% of the SVG width
            cy="50%" // Center Y at 50% of the SVG height
            r="45%" // Radius at 40% of the smallest dimension (width or height)
            fill="#4C56AB" // Circle color
            opacity="0.3" // Adjust transparency
          />
        </svg>
      </div>

      {/* Circle 3 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50%" // Center X at 50% of the SVG width
            cy="50%" // Center Y at 50% of the SVG height
            r="30%" // Radius at 40% of the smallest dimension (width or height)
            fill="#4C56AB" // Circle color
            opacity="0.3" // Adjust transparency
          />
        </svg>
      </div>

      {/* Circle 4 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50%" // Center X at 50% of the SVG width
            cy="50%" // Center Y at 50% of the SVG height
            r="20%" // Radius at 40% of the smallest dimension (width or height)
            fill="#4C56AB" // Circle color
            opacity="0.3" // Adjust transparency
          />
        </svg>
      </div>

      {/* Rock Monster */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src="/services/rock-monster.svg"
          alt="Rock Monster"
          width={500}
          height={500}
          loading={"eager"}
        />
      </div>
    </div>
  );
};

export default BackGroundCircles;
