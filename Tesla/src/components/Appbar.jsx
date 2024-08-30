import React, { useEffect, useState } from 'react'
import NavList from './NavList'
import teslaLogo from '../../src/assets/images/asset 30.svg'
import supportIcon from '../../src/assets/images/asset 31.svg'
import languageIcon from '../../src/assets/images/asset 32.svg'
import accountIcon from '../../src/assets/images/asset 33.svg'

const Appbar = () => {
    const [scrolledUp, setScrolledUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if(currentScrollY > lastScrollY && currentScrollY > 20){
                setScrollDirection('down');
                setScrolledUp(false)
            }else if(currentScrollY < lastScrollY){
                setScrollDirection('up');
                if(currentScrollY === 0){
                    setScrolledUp(false);
                }else{
                    setScrolledUp(true);
                }
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

  return (
    <div className={`fixed w-full flex justify-between items-center px-4 md:px-12 py-4 transition-transform duration-700 ${scrolledUp ? "bg-gray-100" : "bg-transparent"} ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} z-50`}>
        <div>
            <img src={teslaLogo} alt="" className='w-28 h-auto text-white' />
        </div>

        <div className='hidden lg:flex'>
            <NavList setDropDownVisible={(visible) => setScrolledUp(visible)} />
        </div>

        <div className='hidden lg:flex gap-3'>
            <img src={supportIcon} alt="" className='w-6 h-auto cursor-pointer' />
            <img src={languageIcon} alt="" className='w-6 h-auto cursor-pointer' />
            <img src={accountIcon} alt="" className='w-6 h-auto cursor-pointer' />
        </div>

        <button className={`lg:hidden rounded-md px-4 py-1 font-semibold text-[0.9rem] ${scrolledUp ? "bg-gray-300" : "bg-slate-800 bg-opacity-15  text-white "}`} onClick={() => setMenuOpen(!menuOpen)}>
            Menu
        </button>

        {menuOpen && (
            <div className='absolute top-0 left-0 w-full h-screen bg-white flex flex-col lg:hidden'>
                <div className='px-4 py-4 flex items-end justify-end'>
                    <button 
                    className='px-2 mr-6 hover:bg-gray-200 rounded-md items-end'
                    onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 0.7)',transform: '', msFilter: ''}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                    </button>
                </div>
                <Sidebar />
            </div>
        )}
    </div>
  )
}

function Sidebar(){
    const links = [
        {
            name: "Vehicles",
            arrow : true
        },
        {
            name: "Energy",
            arrow : true
        },
        {
            name: "Charging",
            arrow : true
        },
        {
            name: "Discover",
            arrow : true
        },
        {
            name: "Shop",
            arrow : false
        },
        {
            name: "Support",
            arrow : false
        }
    ]
    return <div className='overflow-y-auto h-full'>
        {links.map((link) => <LinkCard key={link.id} link={link} />)}
        <Footer />
    </div>
}

function LinkCard({link}){
    return <div className='hover:bg-gray-100 cursor-pointer p-4 m-4 flex justify-between items-center'>
        <p className='text-[1.2rem] font-semibold'>
            {link.name}
        </p>

        {!link.arrow ? '' : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 0.4)', transform: '',msFilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        )}
    </div>
}

function Footer(){
    return <div className='mb-6'>
        <div className='hover:bg-gray-100 cursor-pointer p-4 m-4 flex justify-between items-center'>
            <div className='flex gap-x-2'>
                <img src={languageIcon} alt="" className='w-6 h-auto cursor-pointer' />
                <div>
                    <p className='font-semibold text-[1.2rem]'>United States</p>
                    <p className='text-gray-500 text-[0.7rem]'>English</p>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 0.4)', transform: '',msFilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            </div>
        </div>

        <div className='hover:bg-gray-100 cursor-pointer p-4 m-4 flex justify-start gap-x-2 items-center'>
            <img src={accountIcon} alt="" className='w-6 h-auto cursor-pointer' />
            <p className='font-semibold text-[1.2rem]'>Account</p>
        </div>
    </div>
}

export default Appbar