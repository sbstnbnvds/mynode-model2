import React from 'react'

import background from '../assets/image.png'

const Section1 = () => {
  return (
    <div className='relative'>
      <div className='py-40 text-7xl font-bold text-center'>
        <h2>Run Bitcoin, Lightning, and more!</h2>
        <div className='flex justify-center absolute w-full h-full left-0 top-0 -z-10 rounded-full overflow-hidden'>
          <img src={background} alt="" className='rounded-xl' />
        </div>

      </div>
    </div>
  )
}

export default Section1