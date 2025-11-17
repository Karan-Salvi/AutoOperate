import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  whatsapp: z.string().min(10, "Enter a valid WhatsApp number"),
  businessName: z.string().min(2, "Business name is too short"),
  leadSource: z.enum(["whatsapp", "instagram", "email", "website"], {
    errorMap: () => ({ message: "Please select a valid lead source" }),
  }),
});
