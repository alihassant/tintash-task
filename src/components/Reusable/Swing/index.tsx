import React from "react";

interface SwingLineProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Swing({
  width = 300,
  height = 150,
  color = "currentColor",
  strokeWidth = 20,
}: SwingLineProps) {
  return (
    <div className="flex items-center justify-center">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        <path
          d={`M0,0 Q${width / 2},${height} ${width},0`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
