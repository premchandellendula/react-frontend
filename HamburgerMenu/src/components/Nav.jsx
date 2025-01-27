import React, { useState } from 'react'
import Button from './Button'

const Nav = () => {
    const Links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/"},
        {name: "Categories", link: "/"},
        {name: "Gallery", link: "/"},
        {name: "Contact", link: "/"}
    ]

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                Prem 
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

            <ul className={`md:flex md:items-center md:pb-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-18 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-0`}>
                {Links.map((link) => (
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                ))}

                <Button>
                    Login
                </Button>
            </ul>
        </div>
    </div>
  )
}

export default Nav