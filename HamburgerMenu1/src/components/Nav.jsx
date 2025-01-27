import React, { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='font-[Poppins] bg-gray-100 flex items-center justify-between px-8 py-4'>
        <div className='text-3xl font-medium'>
            Hamburger
        </div>

        <div className=''>
            <ul className={`absolute left-0 pl-9 bg-white w-full md:flex md:items-center md:static gap-12 text-lg md:w-auto top-[11%] ${isOpen ? "block top-[11%] opacity-100" : "hidden"}`}>
                <li className='my-6 md:my-0 text-xl'>
                    <a href="">Home</a>
                </li>
                <li className='my-6 md:my-0 text-xl'>
                    <a href="">About</a>
                </li>
                <li className='my-6 md:my-0 text-xl'>
                    <a href="">Categories</a>
                </li>
                <li className='my-6 md:my-0 text-xl'>
                    <a href="">Gallery</a>
                </li>
                <li className='my-6 md:my-0 text-xl'>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>

        <div>
            <button className='bg-sky-800 text-white hover:bg-sky-700 px-5 py-2 rounded-full cursor-pointer mr-9 md:mr-0'>Login</button>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )}
            </div>
    </div>
  )
}

export default Nav