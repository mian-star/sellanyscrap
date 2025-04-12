import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";



export async function POST(req: Request) {
    try {
      const formData = await req.formData();
      const files = formData.getAll("files") as File[]; // Get all uploaded files
      
      console.log("Received files:", files);
  
      if (!files.length) {
        return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
      }
  
      // Upload each image to Cloudinary
      const uploadPromises = files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
  
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: "uploads" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(buffer);
        });
      });
  
      // Wait for all uploads to complete
      const uploadResponses = await Promise.all(uploadPromises);
  
      return NextResponse.json({ imageUrls: uploadResponses });
    } catch (error) {
      return NextResponse.json({ error: "Upload failed", details: error }, { status: 500 });
    }
  }
  