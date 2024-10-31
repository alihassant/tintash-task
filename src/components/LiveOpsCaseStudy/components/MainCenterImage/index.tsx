import Image from "next/image";
import React from "react";

const MainCenterImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/liveOps/center-phone-image.svg"
        alt="LiveOps Case Study"
        width={500}
        height={400}
        loading={"eager"}
      />
    </div>
  );
};

export default MainCenterImage;
