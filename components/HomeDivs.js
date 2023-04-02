import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaSuitcase } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

const HomeDivs = ({ icon, plan, desc }) => {
  return (
    <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg text-center sm:text-left'>
      <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
        {/* <FaSuitcase className='text-teal-900 inline-block w-7 h-7' /> */}
        <h2 className='max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto'>
          <Image
            alt='Plan'
            width={500}
            height={500}
            className='hidden sm:block'
          />
        </h2>
      </div>
      <div className='max-w-xl mb-6'>
        <h2 className='max-w-lg mb-6 text-4xl font-bold tracking-tight  sm:leading-none text-[#000000]'>
          {plan}
        </h2>
        <p className='text-base  md:text-lg'>{desc}</p>
      </div>
    </div>
  )
}

export default HomeDivs
