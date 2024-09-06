import React from 'react'
import logo from  '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='py-3 px-4 sticky top-0 bg-mn-black/95 backdrop-blur-3xl z-50'>
      <div className='container flex justify-between items-center mx-auto'>
        <img src={logo} alt="logo" />
        <div className='flex gap-x-4'>
          <a href="" className='px-3 py-2 border-2 hover:border-mn-black hover:text-mn-black hover:bg-white rounded-lg transition-all'>
            Download
          </a>
          <a href="" className='px-3 py-2 bg-gradient-to-t from-mn-orange to-mn-orange-gradient hover:from-mn-black hover:to-mn-black text-mn-black hover:text-white hover:border-2 hover:border-mn-orange-gradient rounded-lg transition-all'>
            Order Now
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar