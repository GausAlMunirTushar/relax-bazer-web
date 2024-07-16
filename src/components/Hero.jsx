import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='container mx-auto grid grid-cols-12 gap-2 py-2 '>
            <div className='col-span-12 md:col-span-3 '>
                menu
            </div>
            <div className='col-span-12 md:col-span-9 rounded-lg'>
                <Image src="/hero-bg.jpg" alt="banner" width={1000} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default Hero