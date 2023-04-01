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
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-64 z-0 hidden w-32 -mt-8 -ml-20 text-[#000000] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='2feffae2-9edf-414e-ab8c-f0e6396a0fc1'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)'
                width='52'
                height='24'
              />
            </svg>
          </span>{' '}
          <Image
            src={icon}
            alt='Plan'
            width={500}
            height={500}
            className='hidden 
sm:block'
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
