"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <div  className="mt-[14px]">
    <Button type="submit" color="primary" isDisabled={pending} className={pending ? 'cursor-wait' : ''}>
      {pending ? "Colorizing..." : "Upload"}
      </Button>
    </div>
  );
}

export default Submit;
