import React from "react";
import { Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function Spiner() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending && <Spinner/>}
    </>
  );
}
