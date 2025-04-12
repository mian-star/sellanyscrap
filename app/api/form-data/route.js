import { NextResponse } from "next/server";
import {connectionSrt} from "../../../lib/db";
import {Scrap} from "../../../lib/modal/scme";
import mongoose from "mongoose";

export async function POST(req) {
    try {
      const { 
        fullName, 
        phoneNumber, 
        scrapType, 
        weight, 
        images, 
        address, 
        pickupDate, 
        expectedPrice, 
        acceptMarketPrice 
      } = await req.json();
  
      // Connect to MongoDB
      await mongoose.connect(connectionSrt);
  
      // Create a new document
      const newOrder = new Scrap({
        fullName,
        phoneNumber,
        scrapType,
        weight,
        images, // Array of Cloudinary URLs
        address,
        pickupDate,
        expectedPrice,
        acceptMarketPrice,
      });
  
      // Save to the database
      await newOrder.save();
  
      return NextResponse.json({ message: "Form submitted successfully!" }, { status: 201 });
    } catch (error) {
      console.error("Error saving form data:", error);
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
    }
  }