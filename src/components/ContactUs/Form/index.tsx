import React from "react";

const ContactUsForm = () => {
  return (
    <div className="z-30 mx-auto my-10 bg-black bg-opacity-20 px-11 py-8 text-white backdrop-blur-[12px] sm:left-[20%] sm:w-[75%] md:absolute md:top-[15%] md:my-0 md:w-[50%] lg:w-[40%] xl:w-[30%]">
      <p className="mt-4 font-bold">TELL US ABOUT YOUR IDEA</p>
      <form className="mt-6 flex flex-col space-y-4">
        <div className="grid grid-cols-1">
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
            placeholder="FULL NAME*"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex w-[75%] flex-col">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
              placeholder="COMPANY*"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
              placeholder="PHONE NUMBER"
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
            placeholder="EMAIL ADDRESS*"
          />
        </div>

        <div className="grid grid-cols-1">
          <textarea
            id="name"
            name="name"
            className="bg-[#7982CD] bg-opacity-40 p-8 placeholder-white"
          />
        </div>

        <div className="grid grid-cols-1">
          <input
            type="file"
            id="name"
            name="name"
            className="bg-[#7982CD] bg-opacity-40 p-8 placeholder-white"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center bg-[#FCF42F] px-6 py-2 text-3xl font-bold text-[#343464] transition-colors hover:bg-yellow-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
