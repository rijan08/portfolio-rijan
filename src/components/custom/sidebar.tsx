"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  BackpackIcon,
  GearIcon,
  GitHubLogoIcon,
  PaperPlaneIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { personalDetails } from "@/lib/const";

const SideBar = () => {
  const sideBarList = [
    {
      label: "Home",
      icon: <PersonIcon className="h-5 w-5" />,
      route: "/",
    },
    {
      label: "Technology",
      icon: <GearIcon className="h-5 w-5" />,
      route: "/skills",
    },
    {
      label: "Experience",
      icon: <BackpackIcon className="h-5 w-5" />,
      route: "/experience",
    },
    {
      label: "Contact",
      icon: <PaperPlaneIcon className="h-5 w-5" />,
      route: "/contact",
    },
    {
      label: "GitHub",
      icon: <GitHubLogoIcon className="h-5 w-5" />,
      route: personalDetails.repo_url,
    },
  ];

  return (
    <div className="fixed right-8 flex flex-col gap-6 h-[calc(100vh-4rem)] items-center justify-center">
      {sideBarList.map((item, index) => (
        <Link href={item.route} key={index}>
          <Button variant="default" size="icon" aria-label={item.label}>
            {item.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
