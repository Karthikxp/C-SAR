"use client";

import { useState } from "react";
import Navibar from "@/components/Navbar";

function Main({ children }) {
  const [light, setTheme] = useState(false);
  return (
    <main className={(light ? 'light' : 'dark') + " text-foreground bg-background min-h-screen"}>
      <Navibar light={light} setTheme={setTheme} />
      {children}
    </main>
  );
}

export default Main;
