import React from "react";
import ContactUsForm from "./Form";
import Image from "next/image";
import Circle from "./Circle";
import BackgroundLayer from "./BackgroundLayer";

const ContactUs = () => {
  return (
    <section
      className="relative h-auto overflow-hidden bg-[#3a46b4] md:min-h-[900px]"
      id="contactus"
    >
      <div className="diagonal-line-projects"></div>
      <div className="absolute h-full w-full bg-white opacity-10"></div>
      <ContactUsForm />
      <div className="absolute flex h-full w-full items-center">
        {/* First SVG */}
        <div className="w absolute inset-0 z-10 items-center justify-end md:flex">
          <Image
            src="https://tintash-task-bucket.s3.us-east-1.amazonaws.com/main/contactUs/contactus-characters.png"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            alt="Contact Us"
            loading={"eager"}
            className="xl:-translate-x-36"
          />
        </div>
        <BackgroundLayer />
        <Circle
          radius="57%"
          strokeWidth={10}
          opacity={0.2}
          strokeCcolor="grey"
        />
        <Circle radius="43%" fill="#183361" strokeWidth={10} />
        <Circle radius="30%" fill="#183361" strokeWidth={10} />
        <Circle radius="22%" fill="#183361" strokeWidth={0} />
        <Circle radius="17%" fill="#183361" strokeWidth={0} />
      </div>
    </section>
  );
};

export default ContactUs;
