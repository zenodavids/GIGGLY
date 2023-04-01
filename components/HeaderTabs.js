import Link from 'next/link'
import Image from 'next/image'

const HeaderTabs = ({ icon, tab, link }) => {
  const Icon = icon
  return (
    <div className='inline-block p-8 text-center'>
      <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50'>
        <Icon className=' object-cover w-auto h-10 rounded shadow-lg mx-auto' />
      </div>
      <p className='font-bold tracking-wide text-[#777]  pb-4'>{tab}</p>
      <Link href={link} className='text-[#777] font-normal text-sm'>
        View Now
      </Link>
    </div>
  )
}

export default HeaderTabs
