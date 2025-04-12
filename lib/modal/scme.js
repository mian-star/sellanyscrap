import mongoose from "mongoose";

const ScrapOrderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  scrapType: { type: String, required: true },
  weight: { type: Number, required: true },
  images: { type: [String], required: true }, // Cloudinary URLs
  address: { type: String, required: true },
  pickupDate: { type: String, required: true },
  expectedPrice: { type: Number },
  acceptMarketPrice: { type: Boolean, default: false },
});

export const Scrap = mongoose.models.scraps || mongoose.model("scraps", ScrapOrderSchema);
