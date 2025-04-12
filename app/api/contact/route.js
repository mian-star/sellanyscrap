import { NextResponse } from "next/server";
import { connectionSrt } from "../../../lib/db";
import { Contact } from "../../../lib/modal/contact";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { name, phone, message } = await req.json();

    // Connect to MongoDB
    await mongoose.connect(connectionSrt);

    const newQuery = new Contact({ name, phone, message });
    await newQuery.save();
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
