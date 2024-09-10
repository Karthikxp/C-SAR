"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" color="primary" isDisabled={pending} className={pending ? 'cursor-wait' : ''}>
      {pending ? "Uploading..." : "Upload"}
    </Button>
  );
}

export default Submit;
