"use server";

import { revalidatePath } from "next/cache";
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";
import ContactUsModel from "@/models/ContactUs";
import dbConnect from "@/lib/dbConnect";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION as string,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY as string,
  },
});

async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  const fileBuffer = file;

  const newFileName = `${Date.now()}_${fileName}`;

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME as string,
    Key: newFileName,
    Body: fileBuffer,
  };

  const command = new PutObjectCommand(params);
  try {
    const response: PutObjectCommandOutput = await s3Client.send(command);
    console.log("File uploaded successfully:", response);
    return newFileName;
  } catch (error) {
    throw error;
  }
}

interface UploadFileResponse {
  status: string;
  message: string;
}

export async function uploadFile(
  prevState: unknown,
  formData: FormData,
): Promise<UploadFileResponse> {
  try {
    dbConnect(); // Connect to the database
    // Extract form fields
    const file = formData.get("file") as File | null;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // File size validation
    if (file && file.size >= 3 * 1024 * 1024) {
      return { status: "error", message: "File size should be under 3 MB." };
    }

    let fileUrl = ""; // Initialize fileUrl for MongoDB document

    // Only upload the file if it exists
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      fileUrl = await uploadFileToS3(buffer, file.name); // Upload file to S3
    }

    // Create contact data with the optional fileUrl
    const contactUsData = new ContactUsModel({
      name,
      company,
      phone,
      email,
      message,
      file: fileUrl || undefined, // Set file to undefined if no file was uploaded
    });

    await contactUsData.save(); // Save form data to MongoDB

    revalidatePath("/"); // Revalidate the path
    return {
      status: "success",
      message: "Data has been submitted successfully.",
    };
  } catch (error) {
    console.log("Failed to upload file:", error);
    return { status: "error", message: "Failed to submit data." };
  }
}
