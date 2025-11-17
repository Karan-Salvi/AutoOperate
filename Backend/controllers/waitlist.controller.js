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

    // Send email
    try {
      await sendEmail({
        fromMail: `AutoOperate Team <${process.env.SMPT_MAIL}>`,
        toMail: entry.email,
        subject: "Welcome to AutoOperate – You're on the Waitlist!",
        html: waitListWelcomeTemplate(entry.fullName),
        message: waitListWelcomeFallback(entry.fullName),
      });

      logger.info("Email to user sent successfully");

      await sendEmail({
        fromMail: `AutoOperate System <${process.env.SMPT_MAIL}>`,
        toMail: process.env.ADMIN_EMAIL,
        subject: "New Waitlist Registration – AutoOperate",
        html: adminWaitlistNotifyTemplate(entry),
        message: adminWaitlistNotifyFallback(entry),
      });

      logger.info("Email to admin sent successfully");

      return res.status(200).json({
        success: true,
        message: `You are on the waitlist and will be notified via email when we launch.`,
      });
    } catch (error) {
      logger.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
        error,
      });
    }
  } catch (err) {
    logger.error("Waitlist Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
