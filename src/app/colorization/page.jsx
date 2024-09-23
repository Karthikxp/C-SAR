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
async function submitImageClient() {
  try {
    const data = new FormData();
    data.append("file", imageFile);


    const response = await axios.post(
      "http://192.168.127.240:5000/predict",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // timeout: 5000,
        timeout: 100,
      }
    );

    const { image_url } = response.data;
    const generatedImageUrl = `http://192.168.127.240:5000${image_url}`;
    router.push(`/result?imageurl=${generatedImageUrl}`);
    
  } catch (error) {
    router.push("/result?imageurl=error");
    
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
    <div className="cs-colorizationcontainer">
      <div className="cs-colorization">
        <h1>SAR Image Colorization</h1>
        <div className="cs-blurbg">
          <div className="cs-imagecontainer">
            <img src="/raw.jpg" alt="" />
            <img src="/arrow.svg" alt="" className="arrow" />
            <img src="colorized.jpg" alt="" />
          </div>
          <form action={submitImageClient}>
            <div className="flex gap-5">
              <Input
                type="file"
                label="Choose Raw Image"
                accept="image/*"
                placeholder="Enter your email"
                name="image"
                onChange={handleImageChange}
              />
              <Submit />
            </div>
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
    </div>
  );
}

export default App;
