import React from 'react'
import { Link } from 'react-router-dom'

function Navitems() {
  return (
    <div className='hidden items-center space-x-8 text-lg md:flex'>
      <div className='group'>
        <a href="#">Home</a>
        <div className='w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white'></div>
      </div>
      <div className='group'>
        <a href="#">Education</a>
        <div className='w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white'></div>
      </div>
      <div className='group'>
        <a href="#">Services</a>
        <div className='w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white'></div>
      </div>
      <div className='group'>
        <a href="#">Show case</a>
        <div className='w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white'></div>
      </div>
      <div className='group'>
        <a href="#">About me</a>
        <div className='w-0 mx-auto duration-150 group-hover:border group-hover:border-black group-hover:w-2/3 dark:group-hover:border-white'></div>
      </div>
    </div>  
  )
}

export default Navitems
