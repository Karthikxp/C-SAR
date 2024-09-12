import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ThemeSwitcher({ isSelected, onValueChange }) {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={isSelected}
      onValueChange={onValueChange}
    />
  );
}
