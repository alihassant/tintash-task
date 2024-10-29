import React from "react";

const InnerCardRectangles = () => {
  return (
    <div>
      {/* SVG 1 */}
      <svg
        width="15" // Adjust SVG width for size
        height="10" // Adjust SVG height for size
        style={{
          position: "absolute",
          top: "25px",
          left: "20px",
          zIndex: "1",
        }} // Adjust top and left for position
      >
        <rect width="50" height="20" fill="#f8f4fc" />
      </svg>

      {/* SVG 2 */}
      <svg
        width="15" // Adjust SVG width for size
        height="10" // Adjust SVG height for size
        style={{
          position: "absolute",
          top: "10px",
          left: "30px",
          zIndex: "1",
        }}
      >
        <rect width="40" height="15" fill="#f8f4fc" />
      </svg>

      {/* SVG 3 */}
      <svg
        width="15" // Adjust SVG width for size
        height="10" // Adjust SVG height for size
        style={{
          position: "absolute",
          top: "25px",
          left: "42px",
          zIndex: "1",
        }}
      >
        <rect width="30" height="10" fill="#f8f4fc" />
      </svg>
    </div>
  );
};

export default InnerCardRectangles;
