import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

const Rating = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[75%]">
      <div className="mb-3 grid grid-cols-1">
        <p className="text-center text-4xl font-extrabold text-[#2E8EFF]">
          Rating
        </p>
      </div>

      <div className="grid w-full grid-cols-1">
        <div className="flex max-w-full justify-center overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current text-[#FBFE69]" />
            ))}
            <StarHalf className="h-6 w-6 fill-current text-[#FBFE69]" />
          </div>
          <span className="ml-2 font-bold text-white">4.5</span>
        </div>
      </div>

      <div className="m-6 grid w-full grid-cols-2 gap-4 md:w-[85%]">
        <div className="flex max-w-full flex-col items-center space-y-2 overflow-hidden rounded-lg bg-[#e5f6ff] px-4 py-3 text-[#27349F]">
          <Image
            src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/liveOps/apple-app-store-icon.svg"
            alt="Quality"
            width={35}
            height={35}
            loading={"eager"}
          />
          <span className="font-bold">#1</span>
          <span className="text-xs font-bold">FamilyGames</span>
          <span className="text-xs">( 6+ months )</span>
        </div>
        <div className="flex max-w-full flex-col items-center space-y-2 overflow-hidden rounded-lg bg-[#e5f6ff] px-4 py-3 text-[#27349F]">
          <Image
            src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/liveOps/apple-app-store-icon.svg"
            alt="Quality"
            width={35}
            height={35}
            loading={"eager"}
          />
          <span className="font-bold">#1</span>
          <span className="text-xs font-bold">FamilyGames</span>
          <span className="text-xs">( 6+ months )</span>
        </div>
      </div>

      <div className="mt-4 grid w-full grid-cols-1 space-y-3">
        <div className="flex max-w-full justify-center overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
          <p className="ml-2 text-3xl font-bold text-[#FBFE69]">
            80M+ DOWNLOADS
          </p>
        </div>
        <div className="flex max-w-full justify-center overflow-hidden rounded-lg bg-[#5260D2] px-4 py-3 text-white">
          <p className="ml-2 text-3xl font-bold text-[#6BFFF6]">15M+ REVENUE</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
