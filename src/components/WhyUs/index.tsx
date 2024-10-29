import { whyUsData } from "@/constants/data";
import WhyUsCard from "./components/WhyUsCard";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative bg-[#f1fbff] md:px-4">
      {/* Heading */}
      <div className="relative z-10 mx-auto mb-12 w-4/5 max-w-6xl pt-28 lg:w-1/2">
        <h2 className="text-center text-3xl font-extrabold">
          <span className="text-[#2E8EFF]">WHY</span>{" "}
          <span className="text-[#391978]">TINTASH</span>
        </h2>
        <p className="text-center text-[#444444]">
          Your success is important to us. We are a reliable partner with 15+
          years of hands-on experience maintaining games after the release.
        </p>
      </div>

      {/* Side Image */}
      <div className="absolute right-0 top-0 z-0 -mt-20 hidden md:block lg:-translate-y-48">
        <Image
          src="/whyUs/why-us-image.svg"
          alt="Why Us Side Image"
          width={400}
          height={60}
          loading={"eager"}
        />
      </div>

      {/* Cards */}
      <div className="mx-8 rounded-tl-[50px] rounded-tr-[50px] px-4 py-16 sm:mx-16 xl:mx-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyUsData.map((data, index) => (
            <WhyUsCard
              key={index}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
