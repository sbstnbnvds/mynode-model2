import React from 'react'

const ModelOneVTwo = () => {
  return (
    <div>
      <h2 className='px-4 text-6xl font-normal text-center mb-12'>
        <span className='relative me-4'>Model One
          <div className='hidden lg:flex absolute inset-x-0 h-3.5 flex justify-center'>
            <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-full w-24 rounded-md'></div>
          </div>
        </span>
        <span className='text-mn-orange font-black me-4'>VS </span>
        <span className='relative'>Model Two
          <div className='hidden lg:flex absolute inset-x-0 h-3.5 flex justify-center'>
            <div className='bg-gradient-to-r from-mn-orange to-mn-orange-gradient h-full w-24 rounded-md'></div>
          </div>
        </span>
      </h2>
      <div className='container mx-auto max-w-xl mb-20 px-2 md:px-8 text-xl'>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-3'>Raspberry Pi 4B Device</p>
          <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-5 lg:h-6 w-4/12 rounded-full mb-3'></div>
          <p className='mb-3'>4 Core Intel CPU (Up to 2.7GHz)</p>
          <div className='bg-gradient-to-r from-mn-orange-gradient to-mn-orange h-5 lg:h-6 w-full rounded-full'></div>

        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-3'>4GB RAM</p>
          <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-5 lg:h-6 w-5/12 rounded-full mb-3'></div>
          <p className='mb-3'>8GB RAM</p>
          <div className='bg-gradient-to-r from-mn-orange-gradient to-mn-orange h-5 lg:h-6 w-10/12 rounded-full'></div>
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-3'>1TB Data Drive</p>
          <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-5 lg:h-6 w-5/12 rounded-full mb-3'></div>
          <p className='mb-3'>2TB Data Drive</p>
          <div className='bg-gradient-to-r from-mn-orange-gradient to-mn-orange h-5 lg:h-6 w-10/12 rounded-full'></div>
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-3'>USB Drive Speed</p>
          <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-5 lg:h-6 w-2/5 rounded-full mb-3'></div>
          <p className='mb-3'>Internal SSD Speed</p>
          <div className='bg-gradient-to-r from-mn-orange-gradient to-mn-orange h-5 lg:h-6 w-full rounded-full'></div>
        </div>

      </div>
    </div>
  )
}

export default ModelOneVTwo

// background: linear-gradient(90deg, #4D4D4D 0%, #767676 100%);
