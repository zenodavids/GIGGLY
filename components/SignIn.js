import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { FcApproval } from 'react-icons/fc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex justify-start items-center flex-col h-screen'>
        <div className=' relative w-full h-full'>
          <img
            src='https://source.unsplash.com/1600x900/?workers'
            className='w-full h-full object-cover'
          />

          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/95 opacity-95'>
            <div className='p-5'>
              <h1 className='text-white text-6xl text-center'>
                The Labour Force
              </h1>
            </div>

            <div className='shadow-2xl'>
              <Link href='/home'>
                <button
                  type='button'
                  className='bg-white flex justify-center items-center py-3 px-10 rounded-lg cursor-pointer outline-none'
                >
                  <FcApproval className='mr-4' />
                  Login
                </button>
              </Link>
            </div>
            <h6 className='text-white text-center'>Register</h6>
          </div>
        </div>
      </div>
    </>
  )
}
