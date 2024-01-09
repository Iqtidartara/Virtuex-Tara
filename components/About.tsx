'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";

interface AboutProps {
  // Add any props here if needed
}

const About: React.FC<AboutProps> = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;

      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          controls.start({
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            opacity: 1,
          });
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      ref={ref}
      className="w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 h-[80vh] max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image src="/Group 24.png" alt="about" width={300} height={300} />
      </motion.div>
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
    </div>
  );
};

export default About;
