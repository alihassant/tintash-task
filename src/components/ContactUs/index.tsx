import React from "react";
import ContactUsForm from "./Form";
import Image from "next/image";
import Circle from "./Circle";

const ContactUs = () => {
  return (
    <section
      className="relative h-auto overflow-hidden bg-[#3a46b4] md:min-h-[900px]"
      id="contactus"
    >
      <div className="diagonal-line-projects"></div>
      <ContactUsForm />
      <div className="absolute flex h-full w-full items-center">
        {/* First SVG */}
        <div className="w absolute inset-0 z-10 items-center justify-end md:flex">
          <Image
            src="/contactUs/contactus-characters.svg"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            alt="Contact Us"
            loading={"eager"}
            className="xl:-translate-x-36"
          />
        </div>
        <Circle
          radius="50%"
          strokeWidth={10}
          opacity={0.2}
          strokeCcolor="grey"
        />
        <Circle radius="40%" fill="#183361" strokeWidth={10} />
        <Circle radius="28%" fill="#183361" strokeWidth={10} />
        <Circle radius="22%" fill="#183361" strokeWidth={0} />
        <Circle radius="17%" fill="#183361" strokeWidth={0} />
      </div>
    </section>
  );
};

export default ContactUs;
