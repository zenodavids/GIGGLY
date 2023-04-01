import React from 'react'
import Stats from './Stats'
import Features from './Features'
import ToggleHomeDivs from './ToggleHomeDivs'
import HeroBannerImages from './HeroBannerImages'

const HeroBanner = () => {
  return (
    <>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <ToggleHomeDivs />
          <HeroBannerImages
            img1='carpenter'
            img2='plumber'
            img3='electrician'
          />
        </div>
      </div>
      <Stats />
      <Features />
    </>
  )
}

export default HeroBanner
