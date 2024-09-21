"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navibar({ light, setTheme }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Navbar isBordered className="cs-navbar">
      <NavbarBrand>
        <div onClick={() => router.push("/")} className="flex  cursor-pointer">
          {/* <p className="font-bold text-3xl">C-SAR</p> */}
          <img src="/logo.svg" className="icon" alt="" />
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className={`${pathname === "/" ? "active" : ""} link`} href="/">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/colorization" ? "active link" : "link"}
            href="/colorization"
          >
            Colorization
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/applications" ? "active link" : "link"}
            href="/applications"
          >
            Applications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={pathname === "/contact" ? "active link" : "link"}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher isSelected={light} onValueChange={setTheme} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
