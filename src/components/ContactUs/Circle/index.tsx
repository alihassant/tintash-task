import React from "react";

interface CircleProps {
  strokeCcolor?: string; // Stroke color of the circle
  size?: number | string; // Size of the circle container
  strokeWidth?: number; // Thickness of the border
  radius?: string; // Radius of the circle
  fill?: string; // Fill color of the circle
  opacity?: number; // Opacity of the circle
}

const Circle: React.FC<CircleProps> = ({
  strokeCcolor = "#1C41C2",
  size = "100%",
  strokeWidth = 4,
  radius = "10%",
  fill = "none",
  opacity = 0.3,
}) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="h-full w-full">
        <circle
          cx="75%"
          cy="50%"
          r={radius}
          fill={fill}
          stroke={strokeCcolor}
          strokeWidth={strokeWidth}
          opacity={opacity}
          strokeOpacity={opacity}
        />
      </svg>
    </div>
  );
};

export default Circle;
