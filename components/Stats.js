const Statistic = () => {
  return (
    <div class='px-4 py-16 mx-auto sm:max-w-full bg-black md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='grid grid-cols-2 row-gap-8 md:grid-cols-4'>
        <div class='text-center md:border-r pb-6 sm:p-1'>
          <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>144K</h6>
          <p class='text-sm font-medium tracking-widest text-white uppercase lg:text-base'>
            Clients
          </p>
        </div>
        <div class='text-center md:border-r pb-6 sm:p-1'>
          <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>12.9K</h6>
          <p class='text-sm font-medium tracking-widest text-white uppercase lg:text-base'>
            Gigs
          </p>
        </div>
        <div class='text-center md:border-r pb-6 sm:p-1'>
          <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>48.3K</h6>
          <p class='text-sm font-medium tracking-widest text-white uppercase lg:text-base'>
            skilled Workers
          </p>
        </div>
        <div class='text-center pb-6 sm:p-1'>
          <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>24.5K</h6>
          <p class='text-sm font-medium tracking-widest text-white uppercase lg:text-base'>
            Unskilled Workers
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistic
