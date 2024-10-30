import mongoose, { Schema } from "mongoose";

export interface ContactUs {
  name: string;
  email: string;
  company: string;
  phoneNumber: string;
  message: string;
  file: string;
}

const ContactUsSchema: Schema<ContactUs> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/.+\@.+\..+/, "Please use a valid email address."],
    },
    company: {
      type: String,
      required: [true, "Company name is required."],
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    file: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const ContactUsModel =
  (mongoose.models.ContactUs as mongoose.Model<ContactUs>) ||
  mongoose.model("ContactUs", ContactUsSchema);

export default ContactUsModel;
