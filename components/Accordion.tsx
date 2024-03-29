import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function AccordionDemo() {
  return (
    <div className="max-w-[72rem] mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
      {/* Left side (Heading) */}
      <div className="md:w-1/2  w-full ">
        <h4 className="text-blue-500 font-nums-fractions font-variant-normal font-variant-ordinal font-variant-styleset font-styleset-3 font-variant-styleset-3 font-variant-styleset-6 font-semibold md:leading-[1.85714] leading-[1.4] text-xs uppercase tracking-wider md:text-start text-center">Faq&apos;s</h4>
        <h1 className="text-[#2A3256]  font-bold text-3xl sm:text-4xl lg:text-5xl md:mt-10 mt-4 md:text-start text-center">
          Frequently Asked <span className="text-[#4255BD] md:leading-[2] leading-[1.4]
          ">Questions</span> 
        </h1>



        <p className="text-[#586174] font-nums-fractions font-variant-normal font-variant-ordinal font-variant-styleset font-styleset-3 font-variant-styleset-3 font-variant-styleset-6 text-sm font-normal md:leading-[2.85714] leading-[1.3]  md:mt-44 mt-6 text-center md:text-start">
        Couldn&apos;t find what you were looking for?
write to us at
        </p>
        <Link href='/' className="text-blue-500 font-nums-stacked-fractions font-feature-cv09 font-feature-cv04 font-feature-ss01 font-feature-cv03 font-feature-ss03 font-feature-cv06 font-inter text-base font-normal  leading-7 tracking-tight underline hidden md:block">example@gmail.com</Link>
      </div>
      {/* Right side (Accordion) */}
      <div className="md:w-1/2 w-full ">
        <Accordion type="single" collapsible className="w-full md:mt-10 mt-4 ml-0 sm:ml-12">
          <AccordionItem
            value="item-1"
            className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
          >
            <AccordionTrigger className="font-bold md:text-lg text-[1rem] text-start">
              What is Virtuex, and how does it work?
            </AccordionTrigger>
            <AccordionContent>
              Virtuex is a platform that helps businesses create and use virtual spaces for work, meetings, and showcasing products. It&apos;s all about making collaboration easier and using advanced technology.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
          >
            <AccordionTrigger className="font-bold md:text-lg text-[1rem] text-start">
              How can Virtuex enhance my productivity?
            </AccordionTrigger>
            <AccordionContent>
              Virtuex allows you to automate repetitive and time-consuming tasks. You can create scripts or bots to perform tasks like data entry, file management, and data processing automatically, saving you valuable time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
          >
            <AccordionTrigger className="font-bold md:text-lg text-[1rem] text-start">
              Is Virtuex secure?
            </AccordionTrigger>
            <AccordionContent>
              Virtuex&apos;s security depends on access control, data encryption, privacy practices, updates, monitoring, and user training. It&apos;s crucial to follow best practices for data protection and system security.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
          >
            <AccordionTrigger className="font-bold md:text-lg text-[1rem] text-start">
              How can I get started with Virtuex for my business?
            </AccordionTrigger>
            <AccordionContent>
              To get started with Virtuex for your business, identify tasks that can be automated or streamlined. Evaluate your specific needs, choose a virtual assistant tool or solution, set up and configure it, and train your team. Start with simple tasks, gradually expanding its use as your team becomes comfortable with it.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
