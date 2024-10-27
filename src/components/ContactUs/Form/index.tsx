import React from "react";

const ContactUsForm = () => {
  return (
    <div className="z-30 bg-black bg-opacity-20 p-4 text-white backdrop-blur-[12px] md:absolute md:left-[300px] md:top-[130px] md:w-[30%]">
      <form className="flex flex-col space-y-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded border border-gray-300 p-2"
          placeholder="Your Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded border border-gray-300 p-2"
          placeholder="Your Email"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
