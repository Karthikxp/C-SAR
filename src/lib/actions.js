"use server";

import fs from "fs";

export async function submitImage(formData) {
  const image = formData.get("image");
  
  if (image.name) {
    const stream = fs.createWriteStream(`/Users/jerry/Pictures/${image.name}`);
    const bufferedImage = await image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (e) => {
      if (e) {
        console.log(e);
        throw new Error("Uploading image failed!");
      }
    });
  }

  console.log("submitted", image);
}
