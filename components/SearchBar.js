import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className='max-w-md mx-auto pb-8 sm:p-0'>
      <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
        <div className='grid place-items-center h-full w-12 text-gray-300'>
          <AiOutlineSearch className='h-6 w-6' />
        </div>
        <input
          className='peer h-full w-full outline-none text-sm pr-2'
          type='text'
          id='search'
          placeholder='Search...'
        />
      </div>
    </div>
  )
}

export default SearchBar
