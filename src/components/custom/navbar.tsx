"use client";
import React from "react";
import { Button } from "../ui/button";
import { DownloadIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { personalDetails } from "@/lib/const";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <div className="flex items-center justify-between h-[10vh]">
      <div className="flex items-center gap-4">
        <Button>
          Download CV <DownloadIcon />
        </Button>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4">
          <Link href={personalDetails.linkedinurl} target="_blank">
            LinkedIn
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <Link href={personalDetails.githuburl} target="_blank">
            GitHub
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <Link
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.mailid}`}
            target="_blank"
          >
            Gmail
          </Link>
        </div>
        {theme == "light" ? (
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon />
          </Button>
        ) : theme == "dark" ? (
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setTheme("light")}
          >
            <SunIcon />
          </Button>
        ) : (
          <Button size="icon" variant="ghost" disabled />
        )}
      </div>
    </div>
  );
};

export default NavBar;
