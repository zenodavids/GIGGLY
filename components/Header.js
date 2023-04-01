import Link from 'next/link'
import { BiRun } from 'react-icons/bi'
import { FaUserTie, FaTools } from 'react-icons/fa'

import HeaderTabs from './HeaderTabs'

const Header = () => {
  return (
    <div className='mb-16'>
      <div className='bg-[#000000]'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400'>
                {"ZENO DAVIDS'S"}
              </p>
            </div>
            <h2 className='max-w-lg mb-6 text-6xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto'>
              <span className='relative inline-block'>
                <span className='relative  textBorder text-transparent bg-clip-text'>
                  GIG
                </span>
              </span>
              GLY
            </h2>
            <p className='text-base text-white md:text-lg'>
              A one-stop shop for connecting clients with workers.
            </p>
          </div>
          <div className='flex items-center justify-center sm:hidden block'>
            <Link
              href='#'
              className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none'
            >
              Sign in
            </Link>
            <Link
              href='#'
              aria-label=''
              className='inline-flex items-center font-semibold text-gray bg-white hover:bg-gray-100 py-2 px-4 border border-gray-400 rounded shadow'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='relative px-4 sm:px-0'>
        <div className='absolute inset-0 bg-[#000000] h-1/2' />
        <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded uppercase shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
          <HeaderTabs icon={BiRun} tab='GIGS' link='/gigs' />
          <HeaderTabs
            icon={FaUserTie}
            tab='skilled workers'
            link='/skilled-workers'
          />
          <HeaderTabs
            icon={FaTools}
            tab='unskilled workers'
            link='/unskilled-workers'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
