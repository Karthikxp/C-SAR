"use server";

import { redirect } from "next/navigation";

export async function submitImage(formData) {
  const image = formData.get("image");

  // Create a FormData object to send to the Flask server
  const data = new FormData();
  data.append("file", image);

  try {
    // Send the image to the Flask server
    const response = await fetch("http://192.168.127.240:5000/predict", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Failed to process image");
    }

    // Get the response containing the image URL
    const result = await response.json();
    const imgurl = result.image_url;

    // Redirect to the result page with the image URL
    const redirecturl = `/result?imageurl=${imgurl}`;
    redirect(redirecturl);
  } catch (error) {
    console.error("Error submitting image:", error);
  }
}
