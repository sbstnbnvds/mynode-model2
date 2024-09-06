import React from 'react'

import Decentralization from '../assets/database-stroke-rounded 1.svg';
import Security from '../assets/security-stroke-rounded 1.svg';
import Privacy from '../assets/customize-stroke-rounded 1.svg';
import Independence from '../assets/independence SVG.svg';
import NetworkStrength from '../assets/zap-stroke-rounded 1.svg';
import FinancialSovereignty from '../assets/cloud-angled-rain-stroke-rounded 1.svg';


const gridComponent = ({ img, title, paragraph }) => <div className='flex flex-col'>
  <img className='w-12 mb-6' src={img} alt="" />
  <h3 className='text-2xl font-bold mb-4'>{title}</h3>
  <p className='text-xl font-normal'>{paragraph}</p>
</div>

const gridList = [
  {
    img: Decentralization,
    title: 'Decentralization',
    paragraph: 'Bitcoin nodes distribute the network across the globe, reducing the risk of central points of failure.'
  },
  {
    img: Security,
    title: 'Security',
    paragraph: 'Nodes verify transactions independently, ensuring that no fraudulent transactions can compromise the blockchain.'
  },
  {
    img: Privacy,
    title: 'Privacy',
    paragraph: 'Running a node enhances your privacy by allowing you to verify transactions without relying on third parties.'
  },
  {
    img: Independence,
    title: 'Independence',
    paragraph: 'By running your own node, you don’t need to trust others. You can independently verify the entire blockchain.'
  },
  {
    img: NetworkStrength,
    title: 'Network Strength',
    paragraph: 'Each node added to the network makes Bitcoin more resilient and robust.'
  },
  {
    img: FinancialSovereignty,
    title: 'Financial Sovereignty',
    paragraph: 'Take control of your financial future by participating in the Bitcoin network on your own terms.'
  },
]

const RunYourOwn = () => {
  return (
    <div>
      <h2 className='text-5xl text-center font-bold mb-20'>Run your own Bitcoin node</h2>
      <div className='grid grid-cols-3 gap-x-32 gap-y-16 container mx-auto px-20 mb-40'>
        {gridList.map( (value, index) => gridComponent({...value}))}
      </div>
    </div>
  )
}

export default RunYourOwn