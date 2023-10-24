import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <main className="w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 h-[80vh] max-w-7xl">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/Group 24.png" alt="about" width={300} height={300} />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 mt-4 md:mt-0  gap-[1rem]">
        <h3 className="text-blue-400 font-extrabold text-xs uppercase">About Virtuex</h3>
        <h1 className="text-[#323232] font-bold text-2xl mt-4">Pioneering Excellence in <br /> Virtual Solutions</h1>
        <p className="text-[#323232] font-normal text-base mt-4">
          At Virtuex, we&apos;re on a mission to revolutionize the digital landscape.
          With a relentless focus on innovation, we deliver cutting-edge virtual
          solutions that empower businesses to thrive. Our commitment to
          excellence is the driving force behind everything we do.
        </p>
        <Button className="rounded-xl bg-[#4255BD] px-4 py-6 text-sm font-medium text-white md-text-xl border-2 focus-outline focus-ring-2 focus-ring-inset focus-ring-gray-500 mt-4">
          Get Started
        </Button>
      </div>
    </main>
  );
};

export default About;
