import Image from 'next/image'
import React from 'react'

const Carousel = () => {
  return (
    <div className='w-full h-screen max-w-7xl mx-auto'>
        <Image
        src='/over.png' alt='23'
        width={1440}
        height={600}/>
    </div>
  )
}

export default Carousel