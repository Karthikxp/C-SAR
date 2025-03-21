import React from "react";
import { Input } from "@nextui-org/react";

export default function File() {
  return (
    <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-4">
      <Input
        type="file"
        label="Choose Raw Image"
        accept="image/*"
        placeholder="Enter your email"
      />
    </div>
  );
}
