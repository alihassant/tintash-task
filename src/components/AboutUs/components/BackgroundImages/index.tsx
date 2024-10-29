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
              src="/aboutUs/bgImages/1.svg"
              alt="1"
              width={120}
              height={120}
              className="translate-x-10 translate-y-10"
            />
          </div>
          <div>
            <Image
              src="/aboutUs/bgImages/2.svg"
              alt="1"
              width={100}
              height={100}
              className="translate-x-10 translate-y-24"
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="/aboutUs/bgImages/3.svg"
              alt="1"
              width={120}
              height={120}
              className="-translate-x-5 translate-y-10"
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="/aboutUs/bgImages/4.svg"
              alt="1"
              width={100}
              height={100}
              className="-translate-x-20 translate-y-10"
            />
          </div>
        </div>
      </div>
      {/* Bottom Background Image */}
      <div className="flex-grow bg-cover bg-bottom">
        <div className="grid h-full grid-cols-5">
          <div className="flex justify-center">
            <Image
              src="/aboutUs/bgImages/5.svg"
              alt="5"
              width={50}
              height={50}
              className="-translate-x-24 -translate-y-3"
            />
          </div>
          <div className="flex">
            <Image
              src="/aboutUs/bgImages/6.svg"
              alt="6"
              width={80}
              height={80}
              className="translate-x-10 translate-y-10"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/aboutUs/bgImages/7.svg"
              alt="7"
              width={100}
              height={100}
              className="-translate-x-5 translate-y-2"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/aboutUs/bgImages/8.svg"
              alt="8"
              width={100}
              height={100}
              className="-translate-x-5 translate-y-10"
            />
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="/aboutUs/bgImages/9.svg"
              alt="9"
              width={100}
              height={100}
              className="-translate-x-12 translate-y-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImages;
