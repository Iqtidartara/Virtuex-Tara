import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div className="w-full ">
      <main className="mx-auto flex flex-col md:flex-row px-4 py-12 max-w-[80rem]">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-8 text-center md:text-start">
          <h3 className="text-blue-400 font-[700] text-xs md:leading-normal leading-[1.4]  uppercase mt-8 mx-auto md:mx-0">
            #1 SaaS website
          </h3>
          <div className="w-full">
            <h1
              className="md:text-[3rem] text-[2rem] font-[700] text-[#000] md:leading-normal leading-[1.3] "
            >
              Elevate Your Business <br className="hidden md:block" />
              with{" "}
              <span className="h-fit w-fit relative  z-0 ">
                <span
                  style={{
                    color: "var(--main, #4255BD)",
                    fontSize: "2rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                  className="border border-solid border-[#4255BD] p-2 px-6 h-fit text-center"
                >
                  Virtuex
                </span>
                <span className="w-4 h-4 bg-[#4255BD] absolute top-0 -left-2 rounded-full" />
                <span className="w-4 h-4 bg-[#4255BD] absolute -top-0 -right-2 rounded-full" />
                <span className="w-4 h-4 bg-[#4255BD] absolute -bottom-2.5 -left-1 rounded-full" />
                <span className="w-4 h-4 bg-[#4255BD] absolute -bottom-2.5 -right-1 rounded-full" />
              </span>
            </h1>
          </div>

          <p className="text-gray-800 text-[16px] font-[400] md:leading-[206%] leading-[1.4]">
            Virtuex empowers your business with cutting-edge virtual solutions.
            Revolutionize your operations, enhance productivity, and embrace the
            future of technology. Experience excellence like never before.
          </p>
          <div className="flex  items-center justify-center">
            <Button className="mr-2 font-semibold tracking-widest border bg-[#4255BD] rounded-[10px] text-white px-6 py-6 text-sm">
              Get Started
            </Button>
            <Button
              variant="ghost"
              className="lg:ml-2 border border-[#4255BD] rounded-[10px] lg:mt-0 px-4 md:py-6 py-5 font-semibold gap-1  hover:bg-black/10"
            >
              Watch Video
              <Image
                src="/ep_video-play.png"
                alt="vie"
                width={20}
                height={20}
              />
            </Button>
          </div>
          <Image src="/users.png" alt="user" width={300} height={100} className="m-4" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          {/* Right-side content goes here */}
          
            <Image src='/Frame 7.png' 
            alt="sd"
            width={600}
            height={600}
            className=" "/>
       
        </div>
      </main>
    </div>
  );
};

export default HomeSection;
