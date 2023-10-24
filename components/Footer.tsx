import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

function UpdatedComponent() {
  return (
    <div className="justify-center items-center bg-zinc-900 flex flex-col px-5">
      <header className="items-center self-center flex w-full max-w-[1120px] flex-col mt-24 mb-24 max-md:max-w-full max-md:my-10">
        <div className="items-center self-center flex w-[544px] max-w-full flex-col">
          <div className="items-start self-center flex  max-w-full">
            <Image src='/logo.png'
            alt="sd"
            width={137}
            height={39} />
           
          </div>
          <p className="text-slate-500 text-center stacked-fractions text-base leading-[175%] tracking-normal mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adip elit. <br /> Posuere
            dolor massa, pellentesque aliquam nisl facilisis sed.
          </p>
        </div>
      </header>
      <Separator  className="bg-neutral-600 w-[60vw]"/>
      <section className="items-center self-stretch flex grow flex-col mt-14 pt-14 px-5 max-md:max-w-full max-md:mt-10">
        <div className="items-start self-center flex w-44 max-w-full gap-4 max-md:justify-center mb-9">
          <div className="items-start bg-neutral-800 flex flex-col flex-1 p-3 rounded-3xl hover:bg-white/40 cursor-pointer">
            <Facebook className="aspect-square object-cover object-center text-white w-full overflow-hidden self-stretch " href=""/>
          </div>
          <div className="items-start bg-neutral-800 flex flex-col flex-1 p-3 rounded-3xl hover:bg-white/40 cursor-pointer">
            <Twitter className="aspect-square object-cover object-center text-white w-full overflow-hidden self-stretch" />
          </div>
          <div className="items-start bg-neutral-800 flex flex-col flex-1 p-3 rounded-3xl hover:bg-white/40 cursor-pointer">
            <Instagram className="aspect-square object-cover object-center w-full text-white overflow-hidden self-stretch" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdatedComponent;
