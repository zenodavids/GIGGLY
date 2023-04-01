import Image from 'next/image'
import { FcApproval } from 'react-icons/fc'
import plumber from '../public/plumber.png'
import carpenter from '../public/carpenter.png'
import electrician from '../public/electrician.png'

const Features = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'></div>
      <div className='grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto md:grid-cols-1'>
        <div className='grid grid-cols-2 gap-5'>
          <Image
            className=' object-cover mx-auto w-auto h-56 col-span-2 rounded shadow-lg'
            src={plumber}
            alt=''
            width={500}
            height={500}
          />
          <Image
            className=' object-cover w-auto h-48 rounded shadow-lg mx-auto'
            src={carpenter}
            alt=''
            width={500}
            height={500}
          />
          <Image
            className=' object-cover w-auto h-48 rounded shadow-lg mx-auto'
            src={electrician}
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div className='pb-4 mb-4 border-b-4'>
            <h6 className='mb-2 font-semibold leading-5'>
              {' '}
              <FcApproval className='mr-4 inline-block' />
              Sit error voluptatem accusantium
            </h6>
            <p className='text-sm text-gray-900'>
              Sportacus andrew weatherall goose Refined gentlemen super mario
            </p>
          </div>
          <div className='pb-4 mb-4 border-b-4 '>
            <h6 className='mb-2 font-semibold leading-5'>
              <FcApproval className='mr-4 inline-block' />
              Cheese on toast airedale the big cheese
            </h6>
            <p className='text-sm text-gray-900'>
              Chase ball of string eat plants, meow, and throw up
            </p>
          </div>
          <div className='pb-4 mb-4 border-b-4'>
            <h6 className='mb-2 font-semibold leading-5'>
              <FcApproval className='mr-4 inline-block' />A flower in my garden,
              a mystery
            </h6>
            <p className='text-sm text-gray-900'>
              Sed ut perspiciatis unde omnis iste nat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
