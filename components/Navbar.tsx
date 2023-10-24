"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ's", href: "/faqs" },
    
  ];

  return (
    <div className="w-full mx-auto bg-white border-2 shadow-xl relative z-50">
      <Popover className="container mx-auto flex items-center  px-6 py-2 h-20 w-full md:max-w-7xl">
        <Image
          src="/logo.png"
          width={147}
          height={39}
          alt="logo"
          className="cursor-pointer"
        />
        <div className="grow">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
            {headerLinks.map((link, index) => (
              <Link key={index} href={link.href} passHref
                 className="font-semibold text-[0.8rem] text-black hover:text-[#646464]">
                  {link.label}
                
              </Link>
            ))}
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#646464] bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Image src="/logo.png" width={83} height={47} alt="logo" />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover-bg-gray-100 hover-text-gray-500 focus-outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {headerLinks.map((link, index) => (
                    <Link key={index} href={link.href} passHref
                      className="focus-outline-none focus-ring-2 focus-ring-inset focus-ring-gray-500 px-2">
                        {link.label}
                    
                    </Link>
                  ))}
                </nav>
              </div>
              {/* mobile screen button */}
              <div className="mt-6 flex flex-col items-center text-center gap-2">
                <Button
                  className="rounded-md bg-[#4255BD] px-4 py-6 text-sm font-medium text-white md-text-xl w-full border-2 focus-outline focus-ring-2 focus-ring-inset focus-ring-gray-500"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* desktop/tab screen button  */}
        <div className="hidden sm:block">
          <Button
            className="mr-2 font-bold tracking-widest bg-[#4255BD]  rounded-xl text-white px-6 py-6 text-sm"
          >
            Get Started
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
