import React from 'react'
import Model from '../assets/product model.png'


const Banner = () => {
  return (
    <div id='banner'
      className='md:mt-4 lg:mt-16'>
      <div
        className='container mx-auto'>
        <div
          className='grid md:grid-cols-2 gap-x-0 gap-y-6 items-center'>
          <img src={Model} alt="" loading='lazy' className='w-full mx-auto max-w-96 px-16 md:px-0 max-w-96 md:max-w-80'/>
          {/* Content Container */}
          <div className='mx-auto text-mn-gray-banner'>
            <h1 className='mb-8 text-5xl sm:text-7xl font-black text-center'>
              MODEL TWO</h1>
            <p className='mb-8 text-lg sm:text-xl max-w-full text-center'>
              The Model Two is the best MyNode package! It includes the MyNode software, support and our most powerful hardware.
            </p>
            <div className="flex flex-wrap justify-center mb-10 text-4xl">
              <p className='font-normal relative me-4 before:w-full before:absolute before:right-0 before:top-5 before:border-b-8 before:border-mn-orange-gradient before:skew-y-12'>$599</p>
              <p className='me-4 hidden sm:block'>|</p>
              <p className='font-black text-white relative me-4'>$499</p>
            </div>
            <a href='https://mynodebtc.com/order/two' className='flex w-fit mx-auto px-11 py-6 bg-gradient-to-t from-mn-orange to-mn-orange-gradient text-black text-xl font-bold rounded-xl  hover:from-mn-black hover:to-mn-black text-mn-black hover:text-white border-2 hover:border-2 border-mn-black hover:border-mn-orange-gradient transition-all'>Order Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

{/* <span className='absolute inset-0 h-4 bg-mn-orange -z-10' /> */ }