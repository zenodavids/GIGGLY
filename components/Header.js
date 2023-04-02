import { FaUserTie, FaTools } from 'react-icons/fa'
import { BiRun } from 'react-icons/bi'
import Link from 'next/link'

import HeaderTabs from './HeaderTabs'
import SearchBar from './SearchBar'
import { useSession, signIn } from 'next-auth/react'

const Header = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className='mb-16'>
      <div className='bg-[#000000]'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12'>
            {/* ======================================= */}

            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400'>
                {!session ? "ZENO DAVIDS'S" : null}
              </p>
            </div>
            {!session ? (
              <h2 className='max-w-lg mb-6 text-6xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto'>
                <span className='relative inline-block'>
                  <span className='relative  textBorder text-transparent bg-clip-text'>
                    GIG
                  </span>
                </span>
                GLY
              </h2>
            ) : (
              <h2 className='max-w-lg mb-6 text-6xl font-bold leading-none tracking-tight text-white sm:text-6xl md:mx-auto'>
                {loading && 'Loading... Please Wait.'}
                {session.user.name.split(' ')[0] ?? session.user.email}
              </h2>
            )}

            <p className='text-base text-white md:text-lg'>
              {!session
                ? 'A one-stop shop for connecting clients with workers.'
                : 'How can we Help you today?'}
            </p>
          </div>
          <SearchBar />
          <div className='flex items-center justify-center sm:hidden block'>
            {!session && (
              <Link
                href='#'
                onClick={handleSignin}
                className='inline-flex items-center font-semibold text-black bg-white hover:bg-gray-100 py-2 px-4 border border-gray-400 rounded shadow'
              >
                {"Let's Get You Started"}
              </Link>
            )}
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
