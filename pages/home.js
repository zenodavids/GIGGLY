import React, { useState, useEffect } from 'react'
import ToggleHomeDivs from '@/components/ToggleHomeDivs'
import Navbar from '@/components/Navbar'

const Content = () => {
  return (
    <>
      <Navbar />
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <ToggleHomeDivs />
          <div className='flex items-center justify-center -mx-4 lg:pl-8'>
            <div className='flex flex-col items-end px-3'>
              <img
                className='object-cover mb-6 rounded shadow-2xl h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
                src='https://source.unsplash.com/1600x900/?carpenter'
                alt=''
              />
              <img
                className='object-cover w-20 h-20 rounded shadow-2xl sm:h-32 xl:h-40 sm:w-32 xl:w-40'
                src='https://source.unsplash.com/1600x900/?plumber'
                alt=''
              />
            </div>
            <div className='px-3'>
              <img
                className='object-cover w-40 h-40 rounded shadow-2xl sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                src='https://source.unsplash.com/1600x900/?electrician'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
