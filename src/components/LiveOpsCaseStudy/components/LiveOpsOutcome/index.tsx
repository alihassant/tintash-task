import Image from "next/image";
import React from "react";

const LiveOpsOutcome = () => {
  return (
    <>
      <div className="mb-5 grid grid-cols-3 gap-6">
        <div>
          <Image
            src="/liveOps/nail-salon-logo.svg"
            alt="Nail Salon"
            width={300}
            height={300}
            className="h-[100px]"
          />
        </div>
        <div className="flex pt-14">
          <Image
            src="/liveOps/tintash-logo.svg"
            alt="Nail Salon"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/liveOps/lion-studios-logo.png"
            alt="Nail Salon"
            width={300}
            height={300}
            className="h-[100px] w-[100px]"
          />
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1">
        <p className="text-center text-2xl font-extrabold text-[#2E8EFF]">
          LIVEOPS OUTCOME
        </p>
      </div>
      <div className="grid w-[95%] grid-cols-1">
        <div className="space-y-5">
          <div className="flex max-w-full justify-between overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-[#A1E8FF]">
                +85%
              </span>
              <span className="px-3 text-xl">LTV</span>
            </div>
            <div className="flex items-center">
              <span className="pr-2 text-xl">$0.6</span>
              <Image
                src="/liveOps/arrow.svg"
                alt="Arrow Down"
                width={20}
                height={20}
              />
              <span className="ps-2 text-xl">$1.1</span>
            </div>
          </div>

          <div className="flex max-w-full justify-between overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-[#A1E8FF]">+6%</span>
              <span className="px-3 text-xl">RRDI</span>
            </div>
            <div className="flex items-center">
              <span className="pr-2 text-xl">26%</span>
              <Image
                src="/liveOps/arrow.svg"
                alt="Arrow Down"
                width={20}
                height={20}
              />
              <span className="ps-2 text-xl">32%</span>
            </div>
          </div>

          <div className="flex max-w-full justify-between overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
            <div className="flex items-center">
              <span className="text-xl font-extrabold text-[#A1E8FF]">+3%</span>
              <span className="px-3 text-xl">RRD3</span>
            </div>
            <div className="flex items-center">
              <span className="pr-2 text-xl">9%</span>
              <Image
                src="/liveOps/arrow.svg"
                alt="Arrow Down"
                width={20}
                height={20}
              />
              <span className="ps-2 text-xl">12%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid w-[95%] grid-cols-2 gap-2">
        <div className="flex max-w-full flex-wrap items-center justify-center rounded-lg bg-[#2A327B] p-3 text-center text-white">
          <Image
            src="/liveOps/apple-app-store-icon.svg"
            alt="App Store Icon"
            width={40}
            height={40}
            className="flex-shrink-0"
          />
          <div className="flex flex-col items-center ps-2">
            <span className="font-semibold">DOWNLOAD</span>
            <span className="text-xs">on App Store</span>
          </div>
        </div>
        <div className="flex max-w-full flex-wrap items-center justify-center rounded-lg bg-[#2A327B] p-3 text-center text-white">
          <Image
            src="/liveOps/google-play-store-icon.svg"
            alt="Google Play Icon"
            width={40}
            height={40}
            className="flex-shrink-0"
          />
          <div className="flex flex-col items-center ps-2">
            <span className="font-semibold">DOWNLOAD</span>
            <span className="text-xs">on Google Play</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveOpsOutcome;