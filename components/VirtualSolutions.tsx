import React from 'react';
import VirtualSolution from './VirtualSolution';
import { Button } from './ui/button';

const virtualSolutionsData = [
  {
    imageSrcSet: '/Ellipse 16.png', // Replace with your image URL
    title: 'Enhanced Collaboration',
    description:
      'Foster seamless collaboration among your teams, regardless of location, through real-time virtual meetings and collaborative workspaces.',
    linkText: 'Learn more',
  },
  {
    imageSrcSet: '/Ellipse 16(1).png', // Replace with your image URL
    title: 'Productivity Boost',
    description:
      'Foster seamless collaboration among your teams, regardless of location, through real-time virtual meetings and collaborative workspaces.',
    linkText: 'Learn more',
  },
  {
    imageSrcSet: '/Ellipse 16(2).png', // Replace with your image URL
    title: 'Real-time Analytics',
    description:
      'Foster seamless collaboration among your teams, regardless of location, through real-time virtual meetings and collaborative workspaces.',
    linkText: 'Learn more',
  },
];

function VirtualSolutions() {
  return (
    <div className="p-5 md:px-10 md:py-12 flex flex-col justify-center items-center max-w-[80rem]">
      <header className="text-indigo-500 text-xs font-black leading-[133.333%] tracking-wide uppercase self-center justify-center items-center  w-[83px] max-w-full px-2.5 py-1 rounded-[6.1875rem]">
        Features
      </header>
      <h1 className="text-zinc-800 text-center text-3xl md:text-4xl font-bold self-center max-w-[405px] mt-6">
        Powering Your Digital Transformation
      </h1>
      <p className="text-zinc-800 text-center text-base mt-7 [text-wrap:balance]" >
        Virtuex provides a comprehensive range of virtual solutions designed to enhance productivity, efficiency, and success for businesses across various industries. Our solutions include:
      </p>
      <div className="justify-center self-center  w-full max-w-[72rem] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 md:flex md:flex-row md:items-stretch md:gap-0 ">
          {virtualSolutionsData.map((solution, index) => (
            <VirtualSolution key={index} {...solution} />
          ))}
        </div>
      </div>
      <Button className="bg-indigo-700 text-white px-6 py-6  mt-9">
        Get Started
      </Button>
    </div>
  );
}

export default VirtualSolutions;
