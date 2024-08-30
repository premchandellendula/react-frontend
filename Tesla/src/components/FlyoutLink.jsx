import React from 'react'
import { useState } from 'react'

const FlyoutLink = ({children, href, FlyoutContent}) => {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent;
    
    return (
        <div 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='relative w-fit h-fit'
        >
            <a href={href} className='relative px-5 text-[0.9rem] font-medium'>{children}
                <span
                style={{
                    transform: showFlyout ? "scaleX(1)" : "scaleX(0)"
                }}
                className='w-[70%] absolute -bottom-2 left-3 -right-1 h-1 origin-left rounded-full bg-black transition-transform duration-300 ease-out'></span>
            </a>
            {showFlyout && (
                <div className='absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black'>
                    <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent'></div>
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white'></div>
                    <FlyoutContent />
                </div>    
            )}
        </div>
    )
}


export default FlyoutLink