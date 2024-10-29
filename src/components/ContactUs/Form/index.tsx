"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema } from "@/schemas/contactUsSchema";

import * as z from "zod";

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

const ContactUsForm = () => {
  const [fileName, setFileName] = useState(""); // State to store the file name
  const {
    register,
    handleSubmit,
    setValue, // Add setValue to update the file input
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
      file: undefined, // Change this to undefined instead of null
    },
  });

  const onSubmit = (data: ContactUsFormData) => {
    console.log("Form Data:", data);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    if (file) {
      setFileName(file.name); // Update the state with the file name
      setValue("file", file); // Update the form value for file input
    } else {
      setFileName(""); // Clear the file name if no file is selected
      setValue("file", undefined); // Clear the form value for file input
    }
  };

  return (
    <div className="z-30 mx-auto my-10 bg-black bg-opacity-20 px-11 py-8 text-white backdrop-blur-[12px] sm:left-[20%] sm:w-[75%] md:absolute md:top-[15%] md:my-0 md:w-[50%] lg:w-[40%] xl:w-[30%]">
      <p className="mt-4 font-bold">TELL US ABOUT YOUR IDEA</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col space-y-4"
      >
        <div className="grid grid-cols-1">
          <input
            type="text"
            {...register("name")}
            className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
            placeholder="FULL NAME*"
          />
          {errors.name?.message && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
        </div>

        <div className="grid grid-cols-2">
          <div className="flex w-[75%] flex-col">
            <input
              type="text"
              {...register("company")}
              className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
              placeholder="COMPANY*"
            />
            {errors.company?.message && (
              <p className="text-red-500">{String(errors.company.message)}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              {...register("phone")}
              className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
              placeholder="PHONE NUMBER"
            />
            {errors.phone?.message && (
              <p className="text-red-500">{String(errors.phone.message)}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1">
          <input
            type="text"
            {...register("email")}
            className="bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
            placeholder="EMAIL ADDRESS*"
          />
          {errors.email?.message && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
        </div>

        <div className="grid grid-cols-1">
          <textarea
            {...register("message")}
            className="h-32 bg-[#7982CD] bg-opacity-40 p-4 placeholder-white"
          />
          {errors.message?.message && (
            <p className="text-red-500">{String(errors.message.message)}</p>
          )}
        </div>

        <div className="grid grid-cols-1">
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer items-center"
          >
            <span className="mr-2 bg-[#7982CD] px-1 text-white">+</span>
            <span className="text-white">ATTACH FILE</span>
            <input
              id="file-upload"
              type="file"
              {...register("file")}
              onChange={handleFileChange} // Handle file change
              className="hidden"
            />
          </label>
          {fileName && <p className="mt-2 text-white">{fileName}</p>}{" "}
          {/* Display the file name */}
          {errors.file?.message && (
            <p className="text-red-500">{String(errors.file.message)}</p>
          )}
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
