import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema(
  {
    full_url: {
      type: String,
      required: true,
      index: true, // Index for faster lookups
      unique: true, // Ensure full URL is unique
    },
    short_url: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  }, 
  { timestamps: true }
);

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;
