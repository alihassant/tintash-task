"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema } from "@/schemas/contactUsSchema";
import * as z from "zod";
import { uploadFile } from "./actions";

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [agreement, setAgreement] = useState(false); // State to store the agreement status
  const [file, setFile] = useState<File | null>(null); // State to store the file name
  const {
    register,
    handleSubmit,
    setValue, // Add setValue to update the file input
    reset,
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

  const onSubmit = async (data: ContactUsFormData) => {
    console.log("Form Data:", data);
    try {
      setLoading(true);
      setErrorMessage("");

      // Check if the agreement checkbox is checked
      if (!agreement) {
        throw new Error("Please agree to the Terms of Privacy Policy.");
      }

      // Create a FormData object to hold the form inputs
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("company", data.company);
      formData.append("phone", data.phone || "");
      formData.append("email", data.email);
      formData.append("message", data.message || "");
      console.log("Form Data:", formData);

      // Append the file if it exists
      if (file && data.file) {
        if (data.file.size <= 1 * 1024 * 1024) {
          formData.append("file", data.file); // Use the file directly
        } else {
          throw new Error("File size should be under 1 MB.");
        }
      }

      // Call the server action to upload the file
      const response = await uploadFile(undefined, formData); // Adjust based on your setup

      if (response.status === "success") {
        reset();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        setFile(null); // Clear the file name after successful submission
      } else {
        console.error(response.message);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      if (error instanceof Error) {
        setErrorMessage(error.message || "Failed to submit data.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
      console.log("Error during file upload:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    console.log("Selected file:", file);
    if (file) {
      setFile(file); // Update the state with the file name
      setValue("file", file); // Update the form value for file input
    } else {
      setFile(null); // Clear the file name if no file is selected
      setValue("file", undefined); // Clear the form value for file input
    }
  };

  return (
    <>
      {/* New parent div that contains both the form and the agreement checkbox */}
      <div className="z-30 mx-auto mt-10 bg-black bg-opacity-20 px-11 py-6 text-white backdrop-blur-[12px] sm:left-[16%] sm:w-[75%] md:absolute md:top-[18%] md:my-0 md:w-[50%] lg:w-[40%] xl:w-[30%]">
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
            {file && (
              <div className="grid grid-cols-2">
                <p className="mt-2 overflow-hidden truncate text-white">
                  {file.name}
                </p>
                <p className="mt-2 overflow-hidden truncate text-end text-white">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}{" "}
            {/* Display the file name */}
            {errors.file?.message && (
              <p className="text-red-500">{String(errors.file.message)}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center bg-[#FCF42F] px-6 py-2 text-3xl font-bold text-[#343464] transition-colors hover:bg-yellow-300"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : success
                ? "Submitted!"
                : error
                  ? "Failed to Submit"
                  : "SUBMIT"}
          </button>
          {errorMessage !== "" && (
            <p className="text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>

      {/* Agreement Checkbox - now inside the new parent div */}
      <div
        className="z-10 mx-auto my-5 mt-4 flex items-center justify-center px-11 py-6 text-white sm:left-[16%] sm:w-[75%] md:absolute md:top-[80%] md:my-0 md:w-[50%] lg:w-[40%] xl:w-[30%]"
        style={{ zIndex: 1 }}
      >
        <input
          type="checkbox"
          id="agreement"
          className="z-10 mr-2"
          onChange={(e) => setAgreement(e.target.checked)}
        />
        <label htmlFor="agreement" className="z-10 text-white">
          I agree to the{" "}
          <a href="#" className="text-[#708CD4] underline">
            Terms of Privacy Policy.
          </a>
        </label>
      </div>
    </>
  );
};

export default ContactUsForm;
