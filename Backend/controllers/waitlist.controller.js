import Waitlist from "../models/waitlist.model.js";
import sendEmail from "../utils/sendmail.js";
import logger from "../utils/logger.js";
import { waitlistSchema } from "../validations/waitlist.validation.js";
import {
  adminWaitlistNotifyFallback,
  adminWaitlistNotifyTemplate,
  waitListWelcomeFallback,
  waitListWelcomeTemplate,
} from "../templates/waitlist.template.js";
import dotenv from "dotenv";
import { sendWaitlistEmails } from "../services/email.service.js";

// dotenv Configuration
dotenv.config({
  path: "./.env",
});

export const joinWaitlist = async (req, res) => {
  try {
    // Validate using Zod
    const parsed = waitlistSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { fullName, email, whatsapp, businessName, leadSource } = parsed.data;

    // Check if already exists
    const exists = await Waitlist.findOne({ email });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Email already registered in the waitlist.",
      });
    }

    // Save entry
    const entry = await Waitlist.create({
      fullName,
      email,
      whatsapp,
      businessName,
      leadSource,
    });

    // Respond instantly
    res.status(200).json({
      success: true,
      message: "You are on the waitlist!",
    });

    // Send async email in background
    setImmediate(() => sendWaitlistEmails(entry));
  } catch (err) {
    logger.error("Waitlist Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
