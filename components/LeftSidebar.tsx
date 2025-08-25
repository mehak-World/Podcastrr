'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import side_links from "@/constants/sidelinks";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LeftSidebar = () => {
    const pathname = usePathname();
    // State variable for active path
    const [active, setActive] = useState("Home");

  return (
    <div className="left_sidebar min-h-screen">
      <nav>
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center max-lg:justify-center gap-1 pb-10">
            <Image
              src="/icons/logo.svg"
              width={23}
              height={27}
              alt="Logo image"
            />
            <h1 className="text-24 font-extrabold text-white max-lg:hidden">
              Podcastrr
            </h1>
          </div>
        </Link>

       {side_links.map((link) => (
  <Link
    key={link.label}
    href={link.path}
    className={`flex gap-3 py-4 items-center justify-center lg:justify-start ${
      pathname === link.path ? 'border-r-4 bg-nav-focus border-orange-1' : ''
    }`}
  >
    <Image src={link.img_url} width={26} height={26} alt="Navigation icon" />
    <p>{link.label}</p>
  </Link>
))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
