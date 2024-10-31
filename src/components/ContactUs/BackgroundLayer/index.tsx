import Image from "next/image";
import React from "react";

const BackgroundLayer = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* 1 */}
      <div className="absolute z-10 flex h-full w-full items-start justify-end">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/left.svg"
          alt="Background Layer"
          height={110}
          width={110}
          className="-translate-x-28 translate-y-40"
        />
      </div>

      {/* 2 */}
      <div className="absolute z-10 flex h-full w-full justify-end">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/left.svg"
          alt="Background Layer"
          height={30}
          width={30}
          className="-translate-x-24 translate-y-36"
        />
      </div>

      {/* 3 */}
      <div className="absolute flex h-full w-full items-start justify-center opacity-25">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/right.svg"
          alt="Background Layer"
          height={70}
          width={70}
          className="translate-x-48 translate-y-28"
        />
      </div>

      {/* 4 */}
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/right.svg"
          alt="Background Layer"
          height={50}
          width={50}
          className="-translate-y-8 translate-x-8"
        />
      </div>

      {/* 5 */}
      <div className="absolute flex h-full w-full items-start justify-center">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/right.svg"
          alt="Background Layer"
          height={70}
          width={70}
          className="-translate-x-24 translate-y-44"
        />
      </div>

      {/* 6 */}
      <div className="absolute flex h-full w-full items-end justify-center opacity-25">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/left.svg"
          alt="Background Layer"
          height={30}
          width={30}
          className="-translate-x-20 -translate-y-10"
        />
      </div>

      {/* 7 */}
      <div className="absolute h-full w-full">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/right.svg"
          alt="Background Layer"
          height={40}
          width={40}
          className="translate-x-80 translate-y-16"
        />
      </div>

      {/* 8 */}
      <div className="absolute flex h-full w-full items-end">
        <Image
          src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/right.svg"
          alt="Background Layer"
          height={60}
          width={60}
          className="-translate-y-48 translate-x-24"
        />
      </div>
    </div>
  );
};

export default BackgroundLayer;
