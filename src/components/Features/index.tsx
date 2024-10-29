import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="w-full bg-gray-200 px-4 py-12 sm:px-6 md:py-4 lg:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            <div className="col-span-1 flex items-center justify-center">
              <Image
                src="/chillingo-logo.png"
                alt="Chillingo logo"
                width={200}
                height={50}
                className="object-contain"
                loading={"eager"}
              />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <Image
                src="/homa-logo.png"
                alt="Homa Logo"
                width={200}
                height={50}
                className="object-contain"
                loading={"eager"}
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/halfbrick-logo.png"
                alt="Halfbrick logo"
                width={200}
                height={50}
                className="object-contain"
                loading={"eager"}
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/lionstudios-logo.png"
                alt="Lion Studios logo"
                width={200}
                height={50}
                className="object-contain"
                loading={"eager"}
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/pocketgems-logo.png"
                alt="Pocket Gems logo"
                width={200}
                height={50}
                className="object-contain"
                loading={"eager"}
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
              <Image
                src="/sesamestreet-logo.png"
                alt="Sesame Street logo"
                width={200}
                height={40}
                className="object-contain"
                loading={"eager"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
