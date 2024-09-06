import React from 'react'
import asset from '../assets/included.png'

import includes1 from '../assets/software-stroke-rounded 1.svg'
import includes2 from '../assets/customer-service-01-stroke-rounded (1) 1.svg'
import includes3 from '../assets/external-drive-stroke-rounded 1.svg'
import includes4 from '../assets/electric-plugs-stroke-rounded 1.svg'
import includes5 from '../assets/Ethernet.svg'
import includes6 from '../assets/zap-stroke-rounded (1) 1.svg'

const Included = () => {

  const includesList = [
    {
      img: includes1,
      text: 'MyNode Premium Software',
    },
    {
      img: includes2,
      text: '1 Year Premium Support',
    },
    {
      img: includes3,
      text: 'No need for external drive',
    },
    {
      img: includes4,
      text: 'Power Cord',
    },
    {
      img: includes5,
      text: 'Ethernet Cable',
    },
    {
      img: includes6,
      text: '530% Faster Initial Block',
    },

  ]


  return (
    <div id='included'>
      <h2 className='mb-20 text-7xl font-bold text-center'>Included</h2>
      {/* Content */}
      <div className='container lg:px-48 mx-auto mb-8'>
        <img className='block mx-auto mb-12'
          src={asset} alt="" loading='lazy' />

        <div className='grid sm:grid-cols-2 gap-6 mb-24 px-6 sm:px-0'>
          {includesList.map((element, index) => <div className='flex items-center'>
            <img className='me-4'
              src={element.img} alt="" />
            <p className='text-2xl'>
              {element.text}</p></div>)}

        </div>
      </div>
    </div>
  )
}

export default Included