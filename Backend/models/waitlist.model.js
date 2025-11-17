import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    whatsapp: {
      type: String,
      required: true,
      trim: true,
    },

    businessName: {
      type: String,
      required: true,
      trim: true,
    },

    leadSource: {
      type: String,
      enum: ["whatsapp", "instagram", "email", "website"],
      required: true,
    },

    status: {
      type: String,
      enum: ["waitlisted", "invited", "active"],
      default: "waitlisted",
    },
  },
  { timestamps: true }
);

const Waitlist = mongoose.models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
export default Waitlist;
