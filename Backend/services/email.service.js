import sendEmail from "../utils/sendmail.js";
import logger from "../utils/logger.js";
import {
  adminWaitlistNotifyFallback,
  adminWaitlistNotifyTemplate,
  waitListWelcomeFallback,
  waitListWelcomeTemplate,
} from "../templates/waitlist.template.js";

export const sendWaitlistEmails = async (entry) => {
  try {
    // User email
    await sendEmail({
      fromMail: `AutoOperate Team <${process.env.SMPT_MAIL}>`,
      toMail: entry.email,
      subject: "Welcome to AutoOperate – You're on the Waitlist!",
      html: waitListWelcomeTemplate(entry.fullName),
      message: waitListWelcomeFallback(entry.fullName),
    });

    logger.info("User welcome email sent");

    // Admin email
    await sendEmail({
      fromMail: `AutoOperate System <${process.env.SMPT_MAIL}>`,
      toMail: process.env.ADMIN_EMAIL,
      subject: "New Waitlist Registration – AutoOperate",
      html: adminWaitlistNotifyTemplate(entry),
      message: adminWaitlistNotifyFallback(entry),
    });

    logger.info("Admin notification email sent");
  } catch (error) {
    logger.error("Email Service Error:", error);
  }
};
