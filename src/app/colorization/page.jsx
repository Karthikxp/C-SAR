"use client";

import { Input } from "@nextui-org/react";
// import { submitImage } from "@/lib/actions";
import Submit from "@/components/Submit";
import { useState } from "react";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/navigation";
import axios from "axios";

function App() {
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();
  async function submitImageClient(e) {
  // Assuming you're using Next.js router for navigation

    try {
      // Create a new FormData object if it's not already one
      const data = new FormData();
      data.append("file", imageFile); // Assuming the image is in formData.image
      console.log(data)
      console.log(imageFile)
      // Send the image to the Flask server
      const response = await axios.post(
        "http://192.168.127.240:5000/predict",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Extract the image URL from the response
      const { image_url } = response.data;

      // Store the image URL in a constant
      const generatedImageUrl = `http://192.168.127.240:5000${image_url}`;
      console.log(generatedImageUrl)
      // Use the Next.js router to navigate to the /result page with the image URL as a query parameter
      router.push(`/result?imageurl=${generatedImageUrl}`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file)
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };
  return (
    <div className="cs-colorization">
      <h1>SAR Image Colorization</h1>
      <div className="cs-blurbg">
        <div className="cs-imagecontainer">
          <img src="/raw.jpg" alt="" />
          <img src="/arrow.svg" alt="" className="arrow" />
          <img src="colorized.jpg" alt="" />
        </div>
        <form action={submitImageClient}>
          <Input
            type="file"
            label="Choose Raw Image"
            accept="image/*"
            placeholder="Enter your email"
            name="image"
            onChange={handleImageChange}
          />
          <Submit />
          {imageSrc && (
            <>
              <div className="cs-formimagecontainer">
                <img src={imageSrc} className="cs-inputimg" alt="" />
                <Spinner />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
