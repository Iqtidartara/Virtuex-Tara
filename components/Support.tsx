import Image from 'next/image';
import React from 'react';

const Support = () => {
  return (
    <main className='bg-[#FAFAFA]'>
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 flex-shrink-0 mt-7 px-4 md:px-2 md:h-28 '>
      <div className='text-gray-800 font-bold leading-6 text-center md:text-left'>
        100+ <span className='text-gray-800 font-medium leading-6'>COMPANIES TRUST Virtuex</span>
      </div>
      
      <div className='flex justify-center md:justify-end items-center gap-8'>
        <div className='flex items-center'>
          <Image src='/assana.png' alt='Asana' width={100} height={22} />
        </div>
        <div className='flex items-center'>
          <Image src='/reddit.png' alt='Reddit' width={100} height={22} />
        </div>
        <div className='flex items-center'>
          <Image src='/slack.png' alt='Slack' width={100} height={22} />
        </div>
      </div>
    </div>
    </main>
  );
}

export default Support;
