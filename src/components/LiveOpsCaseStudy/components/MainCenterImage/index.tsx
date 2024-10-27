import Image from "next/image";
import React from "react";

const MainCenterImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/liveOps/center-phone-image.svg"
        alt="LiveOps Case Study"
        width={500}
        height={400}
      />
    </div>
  );
};

export default MainCenterImage;
