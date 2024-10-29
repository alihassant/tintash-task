import Image from "next/image";
import React from "react";
import BackGroundCircles from "./BackGroundCircles";

const Services = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#3a46b4] py-10"
      id="services"
    >
      <div className="diagonal-line-projects"></div>
      <div className="relative z-10 mx-auto mb-12 flex max-w-6xl flex-col items-center pt-20">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-[#2E8EFF]">YOUR COMPLETE</span>{" "}
          <span className="text-white">GAME DEVELOPMENT SOLUTION</span>
        </h2>
        <p className="mt-4 w-[75%] text-center text-white">
          Unlock the power of seamless game creation with our comprehensive
          suite of development services. From initial ideation to polished
          execution.
        </p>
      </div>

      {/* Background Circles */}
      <BackGroundCircles />

      <div className="bg-opacity-60 py-16 backdrop-blur-[6px] lg:mx-24">
        {/* 1 */}
        <div className="max-w-8xl grid grid-cols-1">
          <div className="flex flex-col md:flex-row">
            <div className="mx-8 h-[150px] w-[170px] rounded-lg bg-gradient-to-br from-[#86BDFE] to-[#7A82FF] px-4 py-4">
              <Image
                src="/services/1.svg"
                alt="Ideation"
                width={200}
                height={200}
                className="-translate-y-10"
                loading={"eager"}
              />
            </div>
            <div className="mx-8 mt-4 flex flex-col items-start justify-center md:mx-0 md:mt-0 md:w-2/3">
              <div className="font-custom absolute -translate-y-16 translate-x-2 text-7xl text-[#E5E0FF] text-opacity-10">
                01
              </div>
              <p className="z-10 text-2xl font-bold text-[#B8E6FF]">LIVEOPS</p>
              <p className="w-full text-white md:w-3/5 xl:w-2/5">
                Unlock the power of seamless game creation with our
                comprehensive suite of development services.
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="max-w-8xl mt-8 grid grid-cols-1">
          <div className="flex flex-col-reverse items-end justify-end md:flex-row md:items-end">
            <div className="mx-8 mt-4 flex flex-col items-end text-end md:mx-0 md:mr-4 md:w-2/3">
              <div className="font-custom absolute z-10 -translate-x-2 -translate-y-12 text-7xl text-[#E5E0FF] opacity-10">
                02
              </div>

              <p className="z-20 text-2xl font-bold text-[#B8E6FF]">
                FULL CYCLE GAME DEVELOPMENT
              </p>
              <p className="w-full text-white md:w-3/5 xl:w-2/5">
                Unlock the power of seamless game creation with our
                comprehensive suite of development services.
              </p>
            </div>
            <div className="z-0 me-8 ms-4 h-[150px] w-[170px] rounded-lg bg-opacity-70 bg-gradient-to-br from-[#86BDFE] to-[#7A82FF] px-4 py-4 backdrop-blur-[6px] md:mb-0">
              <Image
                src="/services/2.svg"
                alt="Ideation"
                width={200}
                height={200}
                className="-translate-y-10"
                loading={"eager"}
              />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="max-w-8xl mt-8 grid grid-cols-1">
          <div className="flex flex-col md:flex-row">
            <div className="mx-8 h-[150px] w-[170px] rounded-lg bg-opacity-70 bg-gradient-to-br from-[#86BDFE] to-[#7A82FF] px-4 py-4 backdrop-blur-[6px]">
              <Image
                src="/services/3.svg"
                alt="Ideation"
                width={200}
                height={200}
                className="-translate-y-10"
                loading={"eager"}
              />
            </div>
            <div className="mx-8 mt-4 flex flex-col items-start justify-center md:mx-0 md:mt-0 md:w-2/3">
              <div className="font-custom absolute z-0 -translate-y-16 translate-x-2 text-7xl text-[#E5E0FF] opacity-10">
                03
              </div>
              <p className="z-10 text-2xl font-bold text-[#B8E6FF]">
                CO-DEVELOPMENT
              </p>
              <p className="w-full text-white md:w-3/5 xl:w-2/5">
                Unlock the power of seamless game creation with our
                comprehensive suite of development services.
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="max-w-8xl mt-8 grid grid-cols-1">
          <div className="flex flex-col-reverse items-end justify-end md:flex-row md:items-end">
            <div className="mx-8 mt-4 flex flex-col items-end text-end md:mx-0 md:mr-4 md:w-2/3">
              <div className="font-custom absolute z-10 -translate-x-2 -translate-y-12 text-7xl text-[#E5E0FF] opacity-10">
                04
              </div>

              <p className="z-20 text-2xl font-bold text-[#B8E6FF]">
                ART & ANIMATION
              </p>
              <p className="w-full text-white md:w-3/5 xl:w-2/5">
                Unlock the power of seamless game creation with our
                comprehensive suite of development services.
              </p>
            </div>
            <div className="z-0 me-8 ms-4 h-[150px] w-[170px] rounded-lg bg-opacity-70 bg-gradient-to-br from-[#86BDFE] to-[#7A82FF] px-4 py-4 backdrop-blur-[6px] md:mb-0">
              <Image
                src="/services/4.svg"
                alt="Ideation"
                width={200}
                height={200}
                className="-translate-y-10"
                loading={"eager"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
