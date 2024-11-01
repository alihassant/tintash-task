import Image from "next/image";
import React from "react";

const BackgroundImages = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col">
      {/* Top Background Image */}
      <div className="flex-grow bg-cover bg-top">
        <div className="grid grid-cols-4">
          <div>
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/1.png"
              alt="1"
              width={100}
              height={100}
              className="translate-x-10 translate-y-10"
              loading={"eager"}
            />
          </div>
          <div>
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/2.png"
              alt="1"
              width={80}
              height={80}
              className="translate-x-10 translate-y-24"
              loading={"eager"}
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/3.png"
              alt="1"
              width={100}
              height={80}
              className="-translate-x-5 translate-y-10"
              loading={"eager"}
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/4.png"
              alt="1"
              width={60}
              height={60}
              className="-translate-x-20 translate-y-16"
              loading={"eager"}
            />
          </div>
        </div>
      </div>
      {/* Bottom Background Image */}
      <div className="flex-grow bg-cover bg-bottom">
        <div className="grid h-full grid-cols-5">
          <div className="flex justify-center">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/5.png"
              alt="5"
              height={50}
              width={80}
              className="h-28 -translate-x-24 translate-y-32"
              loading={"eager"}
            />
          </div>
          <div className="flex">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/6.png"
              alt="6"
              width={100}
              height={80}
              className="w- h-24 translate-x-10 translate-y-48"
              loading={"eager"}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/7.png"
              alt="7"
              width={100}
              height={50}
              className="h-28 -translate-x-5 translate-y-40"
              loading={"eager"}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/8.png"
              alt="8"
              width={100}
              height={100}
              className="h-28 -translate-x-5 translate-y-48"
              loading={"eager"}
            />
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/aboutUs/bgImages/9.png"
              alt="9"
              width={100}
              height={100}
              className="-translate-x-12 translate-y-4"
              loading={"eager"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImages;
