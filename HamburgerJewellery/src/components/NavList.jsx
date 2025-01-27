import React from 'react'
import { Link } from 'react-router-dom'

const NavList = ({isOpen}) => {
  return (
    <div className=''>
        <ul className={`absolute left-0 pl-3 w-full md:flex bg-white md:items-center md:static gap-4 text-black ${isOpen ? "block top-full opacity-100":"hidden"}`}>
            <li className='my-5 py-2 md:py-1 md:my-0 px-5 text-lg hover:bg-gray-200 hover:rounded-md hover:text-violet-800 ease-in cursor-pointer font-medium'>Home</li>


            <li className='my-5 py-2 md:py-1 md:my-0 px-5 text-lg hover:bg-gray-200 hover:rounded-md hover:text-violet-800 ease-in cursor-pointer font-medium'>About</li>


            <li className='my-5 py-2 md:py-1 md:my-0 px-5 text-lg hover:bg-gray-200 hover:rounded-md hover:text-violet-800 ease-in cursor-pointer font-medium'>Categories</li>


            <li className='my-5 py-2 md:py-1 md:my-0 px-5 text-lg hover:bg-gray-200 hover:rounded-md hover:text-violet-800 ease-in cursor-pointer font-medium'>Gallery</li>


            <li className='my-5 py-2 md:py-1 md:my-0 px-5 text-lg hover:bg-gray-200 hover:rounded-md hover:text-violet-800 ease-in cursor-pointer font-medium'>Contact</li>

        </ul>
    </div>
  )
}

export default NavList