import { z } from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(1, "Full Name is required."),
  company: z.string().min(1, "Company name is required."),
  phone: z.string().optional(), // optional phone field
  email: z.string().email("Invalid email address."),
  message: z.string().optional(), // optional message field
  file: z
    .any() // Allow File or undefined
    .optional(),
});
