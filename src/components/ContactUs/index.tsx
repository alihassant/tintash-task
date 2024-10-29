// import Image from "next/image";

// const ContactForm = () => {
//   return (
//     <div className="relative flex min-h-screen items-center justify-center bg-blue-900">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900" />

//       {/* Form Container */}
//       <div className="relative z-10 mx-auto flex max-w-4xl items-center space-x-10 rounded-xl bg-blue-800 bg-opacity-90 p-10 shadow-lg">
//         {/* Form */}
//         <div className="w-full max-w-lg space-y-4">
//           <h2 className="text-2xl font-bold text-white">
//             Tell Us About Your Idea
//           </h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name*"
//               className="w-full rounded-md bg-blue-700 bg-opacity-60 p-3 text-white outline-none"
//             />
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 placeholder="Company"
//                 className="w-1/2 rounded-md bg-blue-700 bg-opacity-60 p-3 text-white outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-1/2 rounded-md bg-blue-700 bg-opacity-60 p-3 text-white outline-none"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email Address*"
//               className="w-full rounded-md bg-blue-700 bg-opacity-60 p-3 text-white outline-none"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="h-32 w-full rounded-md bg-blue-700 bg-opacity-60 p-3 text-white outline-none"
//             />
//             <label className="flex items-center text-white">
//               <input type="checkbox" className="mr-2" />I agree to the terms of{" "}
//               <a href="#" className="ml-1 underline">
//                 Privacy policy
//               </a>
//             </label>
//             <button
//               type="submit"
//               className="w-full rounded-md bg-yellow-500 py-3 font-bold text-black"
//             >
//               Send
//             </button>
//           </form>
//         </div>

//         {/* Character Image */}
//         <div className="hidden md:block">
//           <Image
//             src="/characters.png" // Replace with the path to your character image
//             width={300}
//             height={300}
//             alt="Characters"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="absolute bottom-5 w-full text-center text-white">
//         <div className="mb-2 flex justify-center space-x-4">
//           <a href="#" className="hover:underline">
//             Legal
//           </a>
//           <a href="#" className="hover:underline">
//             Privacy Policy
//           </a>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <a href="#" className="hover:underline">
//             Facebook
//           </a>
//           <a href="#" className="hover:underline">
//             LinkedIn
//           </a>
//           <a href="#" className="hover:underline">
//             Instagram
//           </a>
//           <a href="#" className="hover:underline">
//             Twitter
//           </a>
//         </div>
//         <p className="mt-2">Tintash</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactForm;

// {/* Text content on the left */}
// <div className="mb-8 flex-1 text-left lg:mb-0 lg:text-center">
// <h2 className="text-4xl font-extrabold">
//   <span className="text-[#2E8EFF]">OUR</span>{" "}
//   <span className="text-white">PROJECTS</span>
// </h2>
// <p className="mx-auto mt-4 w-[70%] text-lg text-white">
//   We craft every project piece by thinking of the end user. That's why
//   our game development services make our clients succeed.
// </p>
// </div>

// <div className="absolute inset-0 z-10 bg-black opacity-10" />

import React from "react";
import ContactUsForm from "./Form";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#3a46b4] md:min-h-[700px]"
      id="contactus"
    >
      <div className="diagonal-line-projects"></div>
      <ContactUsForm />
      <div className="absolute bottom-0 right-0 top-0 hidden md:flex">
        <div className="relative h-full w-full">
          {/* First SVG */}
          <Image
            src="/contact-us-image.svg"
            width={1000} // Adjust width as needed
            height={1000} // Adjust height as needed
            alt="Contact Us"
            loading={"eager"}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
